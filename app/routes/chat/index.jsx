import React, { useEffect, useState, useRef, use } from 'react';
import { io } from 'socket.io-client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useParams } from 'react-router';
import { useTheme } from '../../providers/themeContext'; 
import { SendHorizonalIcon, Brain, Activity } from 'lucide-react';

const CaseChat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const { caseId } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token de autenticação não encontrado');
      return;
    }

    const newSocket = io('https://backend-siop.onrender.com', {
      auth: { token }
    });

    newSocket.on('connect', () => {
      console.log('Conectado ao WebSocket');
      newSocket.emit('joinCase', caseId);
    });

    newSocket.on('error', (error) => {
      setError(error.message);
    });

    newSocket.on('messageHistory', (history) => {
      setMessages(history);
      setLoading(false);
    });

    newSocket.on('newMessage', (message) => {
      setMessages(prev => [...prev, message]);
    });

    newSocket.on('userJoined', (user) => {
      setMessages(prev => [...prev, {
        _id: `system-${Date.now()}`,
        caseId,
        sender: { _id: 'system', nome: 'Sistema', role: 'system' },
        content: `${user.nome} entrou no chat`,
        createdAt: new Date().toISOString()
      }]);
    });

    newSocket.on('userLeft', (user) => {
      setMessages(prev => [...prev, {
        _id: `system-${Date.now()}`,
        caseId,
        sender: { _id: 'system', nome: 'Sistema', role: 'system' },
        content: `${user.nome} saiu do chat`,
        createdAt: new Date().toISOString()
      }]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [caseId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !socket) return;

    socket.emit('sendMessage', {
      caseId,
      message: newMessage.trim()
    });

    setNewMessage('');
  };

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await fetch(`https://backend-siop.onrender.com/api/cases/${caseId}`);
        if (!response.ok) throw new Error('Erro ao buscar detalhes do caso');
        const json = await response.json();
        setData(json);
        console.log('Detalhes do caso:', json);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchCaseDetails();
  }, [caseId]);


  const getRoleColor = (role) => {
    switch (role) {
      case 'perito':
        return 'bg-blue-600';
      case 'admin':
        return 'bg-red-600';
      case 'assistente':
        return 'bg-green-700';
      default:
        return 'bg-gray-500';
    }
  };

  if (error) {
    return (
      <div className="p-4 text-red-700 bg-red-100 border border-red-400 rounded">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }


  const { theme } = useTheme();

  return (
    <div className="w-[85%] h-[90%] flex flex-col">
      <div className={`flex flex-col flex-1 rounded shadow rounded-t-2xl ${theme === 'dark' ? "bg-[#212121]" : "bg-white"}` }>
        <div className="p-4 bg-[#0A4A81] text-white rounded-t-2xl shadow-xs">
          <h2 className="text-lg font-normal">Chat do Caso<strong> {data.titulo}</strong> <Activity size={30} /> </h2>
        </div>

        <ul className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <li key={message._id} className="flex gap-3 items-start">
              <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center ${getRoleColor(message.sender.role)}`}>
                {message.sender.nome[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-400">{message.sender.nome}</span>
                  <span className="text-xs text-gray-500">
                    {format(new Date(message.createdAt), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                  </span>
                </div>
                <div className="text-sm mt-1 text-gray-400">{message.content}</div>
              </div>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>

        <form onSubmit={handleSendMessage} className={`p-4 border-t ${theme === 'dark' ? "border-gray-700 bg-[#181818]" : "border-gray-300"}`}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1 p-2 rounded focus:outline-none transition "
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
            >
              <SendHorizonalIcon size={30} className={` ${!newMessage.trim() ? 'opacity-50 cursor-not-allowed' : ''} ${theme === 'dark' ? "text-white" : "text-[#0A4A81]" }`} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseChat;

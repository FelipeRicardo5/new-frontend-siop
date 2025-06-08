import React, { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  CircularProgress,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const CaseChat = ({ caseId }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token de autenticação não encontrado');
      return;
    }

    const newSocket = io('http://localhost:3000', {
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

  const getRoleColor = (role) => {
    switch (role) {
      case 'perito':
        return '#1976d2';
      case 'admin':
        return '#d32f2f';
      case 'assistente':
        return '#2e7d32';
      default:
        return '#757575';
    }
  };

  if (error) {
    return (
      <Box p={2}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '85%', height: '90%', display: 'flex', flexDirection: 'column' }}>
      <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h6">Chat do Caso</Typography>
        </Box>
        
        <List sx={{ flex: 1, overflow: 'auto', p: 2 }}>
          {messages.map((message) => (
            <React.Fragment key={message._id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: getRoleColor(message.sender.role) }}>
                    {message.sender.nome[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography component="span" variant="subtitle2">
                        {message.sender.nome}
                      </Typography>
                      <Typography component="span" variant="caption" color="text.secondary">
                        {format(new Date(message.createdAt), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                      sx={{ display: 'block' }}
                    >
                      {message.content}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
          <div ref={messagesEndRef} />
        </List>

        <Box component="form" onSubmit={handleSendMessage} sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Box display="flex" gap={1}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              size="small"
            />
            <IconButton
              color="primary"
              type="submit"
              disabled={!newMessage.trim()}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CaseChat;
import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import { useTheme } from '../../providers/themeContext';
import Pie from '../../components/charts/chartPie.jsx';
import ChartBar from '../../components/charts/chartBar.jsx';
import ChartLine from '../../components/charts/chartLine.jsx';
import ChartRadar from '../../components/charts/chartRadar.jsx';
import Input from '../../components/form/inputForm.jsx';
import Button from '../../components/form/button.jsx';
import GroupBySelect from '../../components/form/groupBySelect.jsx';
import Loading from '../../../public/tube-spinner.svg'
import Passarela from '../../components/layouts/catwalk/catwalk.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dashboardAPI } from '../../services/api';

export default function DashBoard() {
    const { theme } = useTheme();
    const [groupBy, setGroupBy] = useState('');
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({});
    const [caseStats, setCaseStats] = useState({
        currentMonth: 0,
        previousMonth: 0,
        growth: 0
    });
    const [averageAge, setAverageAge] = useState(0);

    const groupOptions = [
        { value: 'vitima.sexo', label: 'Sexo da Vítima' },
        { value: 'vitima.corEtnia', label: 'Cor/Etnia da Vítima' },
        { value: 'status', label: 'Status do Caso' },
        { value: 'causaMorte', label: 'Causa da Morte' },
        { value: 'instituicao', label: 'Instituição Responsável' },
        { value: 'evidencias.condicao', label: 'Condições das Evidências' },
        { value: 'evidencias.categoria', label: 'Categoria das Evidências' },
        { value: 'evidencias.tipo', label: 'Tipo de Evidência' },
        { value: 'evidencias.status', label: 'Status das Evidências' },
        { value: 'evidencias.localizacao', label: 'Localização das Evidências' }
    ];

    // Função para buscar estatísticas dos casos
    const fetchCaseStats = async () => {
        try {
            const { currentMonth, previousMonth, growth } = await dashboardAPI.getCaseStats();
            setCaseStats({
                currentMonth,
                previousMonth,
                growth
            });
        } catch (error) {
            console.error('Erro ao buscar estatísticas:', error);
            toast.error('Erro ao buscar estatísticas dos casos');
        }
    };

    // Função para buscar média de idade
    const fetchAverageAge = async () => {
        try {
            const { averageAge } = await dashboardAPI.getAverageAge();
            setAverageAge(Math.round(averageAge));
        } catch (error) {
            console.error('Erro ao buscar média de idade:', error);
            toast.error('Erro ao buscar média de idade das vítimas');
        }
    };

    // Buscar estatísticas ao montar o componente
    useEffect(() => {
        fetchCaseStats();
        fetchAverageAge();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!groupBy) {
            toast.warning('Selecione um campo para agrupar.', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        setLoading(true);
        try {
            const resultado = await dashboardAPI.getChartData(groupBy, filters);
            
            // Cores para os gráficos
            const backgroundColors = [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ];

            const borderColors = backgroundColors.map(color => color.replace('0.7', '1'));

            const formatted = {
                labels: resultado.map(r => r.categoria),
                datasets: [{
                    label: groupOptions.find(opt => opt.value === groupBy)?.label || groupBy,
                    data: resultado.map(r => r.quantidade),
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1
                }]
            };

            setChartData(formatted);
            toast.success('Dados carregados com sucesso!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (err) {
            console.error('Erro ao buscar dados:', err);
            toast.error('Erro ao buscar dados. Por favor, tente novamente.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick        
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme === 'dark' ? 'dark' : 'light'}
            />
            <h1 className={`${theme === 'dark' ? '' : 'text-[#0A4A81]'} text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8`}>
                Dashboard
            </h1>
          
            <div 
                className={`${theme === 'dark' ? 'bg-[#212121]' : 'bg-white'
                    } w-full px-4 sm:px-6 py-6 sm:py-8 gap-6 sm:gap-8 border border-[#ccc] rounded-[20px] shadow-2xl `}
            >
                <div className="w-full flex sm:flex-row gap-4 justify-between">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
                        <GroupBySelect
                            groupBy={groupBy}
                            setGroupBy={setGroupBy}
                            groupOptions={groupOptions}
                        />
                        {/* <Input
                            type="text"
                            placeholder="Estado do corpo"
                            onChange={(e) => setFilters({ ...filters, estado: e.target.value })}
                            className="w-full p-2 border rounded-[20px]"
                        /> */}

                        <Button
                            type="submit"
                            value="Gerar Gráfico"
                            className="w-full sm:w-auto hover:bg-[#1d6bad] px-4 py-2 rounded-[20px] border-1 border-[#1d6bad]"
                        />
                    </form>
                    <div className=" sm:w-auto flex gap-4 flex-col ">
                        <Button
                            type="submit"
                            value="Criar Caso"
                            className="w-full sm:w-auto hover:bg-[#1d6bad] px-4 py-2 rounded-[20px] border-1 border-[#1d6bad]"
                        />
                        <Button
                            value="Gerar Relatório"
                            className="w-full sm:w-auto hover:bg-[#1d6bad] px-4 py-2 rounded-[20px] border-1 border-[#1d6bad]"
                        />
                        <Button
                            value="Criar Laudo"
                            className="w-full sm:w-auto hover:bg-[#1d6bad] px-4 py-2 rounded-[20px] border-1 border-[#1d6bad]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    <div className="p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-opacity-20 backdrop-blur-lg">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Total de Registros</h3>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold">1,234</p>
                    </div>

                    <div className="p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-opacity-20 backdrop-blur-lg">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Média de Idade das Vítimas</h3>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold">{averageAge} anos</p>
                    </div>

                    <div className="p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-opacity-20 backdrop-blur-lg">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Crescimento</h3>
                        <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${caseStats.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {caseStats.growth >= 0 ? '+' : ''}{caseStats.growth.toFixed(1)}%
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            {caseStats.currentMonth} casos este mês
                        </p>
                    </div>
                </div>
                <div className="w-full h-[70px]">
                    {/* <Passarela dados={dados}/> */}
                </div>
                <div className="w-full">
                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <img src={Loading} alt="Loading" className="w-20 h-20" />
                        </div>
                    )}
                    {chartData && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="w-full aspect-square sm:aspect-auto border border-gray-300 rounded-lg p-4 shadow-md">
                                <Pie data={chartData} />
                            </div>
                            <div className="w-full aspect-square sm:aspect-auto border border-gray-300 rounded-lg p-4 shadow-md">
                                <ChartBar data={chartData} />
                            </div>
                            <div className="w-full aspect-square sm:aspect-auto border border-gray-300 rounded-lg p-4 shadow-md">
                                <ChartLine data={chartData} />
                            </div>
                            <div className="w-full aspect-square sm:aspect-auto border border-gray-300 rounded-lg p-4 shadow-md">
                                <ChartRadar data={chartData} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

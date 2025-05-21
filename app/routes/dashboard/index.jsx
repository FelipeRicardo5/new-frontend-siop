import { useState } from 'react';
import axios from 'axios';
import styles from './dashboard.module.css';
import { useTheme } from '../../providers/themeContext';
import Pie from '../../components/charts/chartPie.jsx';
import ChartBar from '../../components/charts/chartBar.jsx';
import ChartLine from '../../components/charts/chartLine.jsx';
import ChartRadar from '../../components/charts/chartRadar.jsx';
import Input from '../../components/form/inputForm.jsx';
import Button from '../../components/form/button.jsx';
import GroupBySelect from '../../components/form/groupBySelect.jsx';

export default function DashBoard() {
    const { theme } = useTheme();
    const [groupBy, setGroupBy] = useState('');
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({});

    const groupOptions = [
        { value: 'sexo', label: 'Sexo da Vítima' },
        { value: 'cidade', label: 'Cidade do Caso' },
        { value: 'estado', label: 'Estado do Corpo' },
        { value: 'vitima.nome', label: 'Nome da Vítima' },
        { value: 'evidencias.lesoes', label: 'Lesões' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!groupBy) return alert('Selecione um campo para agrupar.');

        setLoading(true);

        // Simulando um retorno da API
        setTimeout(() => {
            const mockResponse = [
                { categoria: 'Masculino', quantidade: 12 },
                { categoria: 'Feminino', quantidade: 8 },
                { categoria: 'Não informado', quantidade: 3 }
            ];

            const formatted = {
                labels: mockResponse.map(r => r.categoria),
                datasets: [{
                    label: groupBy,
                    data: mockResponse.map(r => r.quantidade),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            setChartData(formatted);
            setLoading(false);
        }, 1000); // simula tempo de requisição
    };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!groupBy) return alert('Selecione um campo para agrupar.');

    //     setLoading(true);
    //     try {
    //       const res = await axios.post('/api/dashboard/filtrar-casos-dinamico', {
    //         groupBy,
    //         filters
    //       });

    //       const resultado = res.data;
    //       const formatted = {
    //         labels: resultado.map(r => r.categoria),
    //         datasets: [{
    //           label: groupBy,
    //           data: resultado.map(r => r.quantidade),
    //           backgroundColor: [
    //             'rgba(255, 99, 132, 0.7)',
    //             'rgba(54, 162, 235, 0.7)',
    //             'rgba(255, 206, 86, 0.7)',
    //             'rgba(75, 192, 192, 0.7)',
    //             'rgba(153, 102, 255, 0.7)',
    //             'rgba(255, 159, 64, 0.7)'
    //           ],
    //           borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //             'rgba(255, 159, 64, 1)'
    //           ],
    //           borderWidth: 1
    //         }]
    //       };

    //       setChartData(formatted);
    //     } catch (err) {
    //       console.error('Erro ao buscar dados:', err);
    //       alert('Erro ao buscar dados.');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    return (
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 m-">
            <h1 className={`${theme === 'dark' ? '' : 'text-[#0A4A81]'} text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8`}>
                Dashboard
            </h1>

            <div
                className={`${theme === 'dark' ? 'bg-[#212121]' : 'bg-white'
                    } w-full px-4 sm:px-6 py-6 sm:py-8 gap-6 sm:gap-8 border border-[#ccc] rounded-[20px] shadow-2xl`}
            >
                <div className="w-full max-w-2xl flex">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
                        <GroupBySelect
                            groupBy={groupBy}
                            setGroupBy={setGroupBy}
                            groupOptions={groupOptions}
                        />
                        <Input
                            type="text"
                            placeholder="Estado do corpo"
                            onChange={(e) => setFilters({ ...filters, estado: e.target.value })}
                            className="w-full p-2 border rounded-[20px]"
                        />

                        <Button
                            type="submit"
                            value="Gerar Gráfico"
                            className="w-full sm:w-auto hover:bg-[#1d6bad] px-4 py-2 rounded-[20px]"
                        />
                    </form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    <div className="p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-opacity-20 backdrop-blur-lg">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Total de Registros</h3>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold">1,234</p>
                    </div>
                    
                    <div className="p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-opacity-20 backdrop-blur-lg">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Média por Dia</h3>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold">42</p>
                    </div>
                    
                    <div className="p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-opacity-20 backdrop-blur-lg">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Crescimento</h3>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500">+15%</p>
                    </div>
                </div>

                <div className="w-full">
                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <p className="text-lg">Carregando gráfico...</p>
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

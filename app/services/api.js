import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const dashboardAPI = {
    // Busca estatísticas dos casos
    getCaseStats: async () => {
        try {
            const response = await axios.get(`${API_URL}/dashboard/estatisticas-casos`);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar estatísticas dos casos');
        }
    },

    // Busca dados para os gráficos
    getChartData: async (groupBy, filters) => {
        try {
            const response = await axios.post(`${API_URL}/dashboard/filtrar-casos-dinamico`, {
                groupBy,
                filters
            });
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar dados para os gráficos');
        }
    },

    // Busca a média de idade das vítimas
    getAverageAge: async () => {
        try {
            const response = await axios.get(`${API_URL}/dashboard/media-idade`);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar média de idade das vítimas');
        }
    }
}; 
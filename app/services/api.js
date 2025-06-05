import axios from 'axios';

const API_URL = 'https://backend-siop.onrender.com/api';

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

    getAverageAge: async () => {
        try {
            const response = await axios.get(`${API_URL}/dashboard/media-idade`);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar média de idade das vítimas');
        }
    }
}; 

export const authAPI = {
    
    login: async (email, senha) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email, senha });
            const token = response.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('role', response.data.role); 
            return token;
        } catch (error) {
            throw new Error('Erro ao realizar login');
        }
    },

    
    logout: () => {
        localStorage.removeItem('token');
    },

    isAuthenticated: () => !!localStorage.getItem('token'),
    getToken: () => localStorage.getItem('token')
};

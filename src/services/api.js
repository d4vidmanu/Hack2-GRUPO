import axios from 'axios';
import * as jwtDecode from 'jwt-decode';

const BASE_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

// Configuración de Axios para manejar CORS
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const fetchItems = async (limit = 2, lastKey = null) => {
    try {
        const response = await axios.get('/api/items', { // Asegúrate de tener la URL correcta para los items
            params: { limit, lastKey },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const getRoleBasedOnToken = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode.default(token); // Usar .default para obtener la exportación por defecto
    return decodedToken.role;
};

export const fetchLogin = async (username, password) => {
    try {
        const response = await axios.post('/auth/login', { username, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchRegister = async (body) => {
    try {
        const response = await axios.post('/auth/register', body);
        return response.data;
    } catch (error) {
        console.error('Error en fetchRegister:', error);
        throw error;
    }
};

export const getProducts = async (skip, limit) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/products', {
            params: { skip, limit },
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

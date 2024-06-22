import axios from 'axios';

const BASE_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com/';

export const getRoleBasedOnToken = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    return decodedToken.role;
  }

export const fetchLogin = async (username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {username, password});
        const token = response.data.token;

        localStorage.setItem('token', token)

        return response.data;

    } catch(error) {
        console.log(error);
        throw error;
    }
};

export const fetchRegister = async (body) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, body);
      return response.data;
    } catch (error) {
      console.error('Error en fetchRegister:', error);
      throw error;
    }
  };

  export const getProducts = async (skip, limit) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/api/products`, {
            params: {
                skip,
                limit
            },
            headers: {Authorization: `Bearer ${token}`
        }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
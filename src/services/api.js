// src/services/api.js
import axios from 'axios';

const API_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com/items';

export const fetchItems = async (limit = 2, lastKey = null) => {
    try {
        const response = await axios.get(API_URL, {
            params: { limit, lastKey },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

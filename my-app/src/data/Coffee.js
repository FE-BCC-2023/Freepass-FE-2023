import axios from 'axios';

const getAllDataCoffee = async () => {
    try {
        const response = await axios.get('https://api.sampleapis.com/coffee/hot');
        return response.data;
    } catch (error) {
        return error;
    }
};

const getDataCoffeeById = async (id) => {
    try {
        const response = await axios.get(`https://api.sampleapis.com/coffee/hot/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export { getAllDataCoffee, getDataCoffeeById };
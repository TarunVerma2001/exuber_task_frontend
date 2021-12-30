import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({ baseURL: 'http://127.0.0.1:8080/api/' });

export const getAllData = async () => {
  try {
    const res = await api.get('/products');
    return { status: 'success', ...res.data };
  } catch (err) {
    toast.error('Server is Busy. Please try again later!');
    return {
      status: 'fail',
    };
  }
};

export const addProduct = async (data, onLoad) => {
  try {
    const res = await api.post('/products', data);
    if(res){
      onLoad();
    }
  } catch (err) {
    toast.err('proble while adding!');
  }
};

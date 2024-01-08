import axios from 'axios';

const getProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
}

export { getProducts }
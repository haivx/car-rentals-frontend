import { getAuthToken } from 'utils/helpers';
import axios from 'axios';

const token = getAuthToken();
export const SERVER_URL = `${process.env.API_URL}/${process.env.API_PREFIX}`;
const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const noAuthInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export { noAuthInstance as noAuthAxiosClient, instance as axiosClient };

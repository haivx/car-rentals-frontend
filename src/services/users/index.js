import { axiosClient } from '../axiosClient';

export const userServices = {
  login: async ({ email, password }) => {
    try {
      return await axiosClient.post(`login`, { email, password });
    } catch (error) {}
  },
};

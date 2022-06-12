import axios from 'axios';

export const BASE_URL = 'https://cemil-backend.herokuapp.com/api/v1';

export const callAPI = async (config) => {
  try {
    Object.assign(config, {
      baseURL: BASE_URL,
    });
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

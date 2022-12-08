import { envConfig } from '@src/core/config/envConfig.js';
import axios, { AxiosInstance } from 'axios';
import qs from 'qs';
import { useMemo } from 'react';

let axiosInstance: AxiosInstance = null;

const customAxiosEnv = axios.create({
  withCredentials: true,
  baseURL: envConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

export const customAxios = () => {
  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = customAxiosEnv;
  return axiosInstance;
};

export const useAxiosEnvironment = () =>
  useMemo(() => {
    customAxios();
  }, []);

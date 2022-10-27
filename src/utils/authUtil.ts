// check cookies, axios header
import { customAxios } from '@src/core/lib/customAxios';
import Cookies from 'js-cookie';

export const setAuthToken = (token: string) => {
  Cookies.set('jwt', token);
  customAxios().defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getAuthToken = (): string => {
  const token = Cookies.get('jwt')?.toString() || '';
  return token;
};

export const clearAuthToken = () => {
  Cookies.remove('jwt');
  customAxios().defaults.headers.common.Authorization = '';
};

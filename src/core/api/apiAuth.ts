import { customAxios } from '../lib/customAxios';

export const apiGoogleLogin = async (response) => {
  const jwtToken = await customAxios().post('/oauth/jwt/google', JSON.stringify(response));
  if (jwtToken.status === 200) {
    localStorage.setItem('jwtToken', jwtToken.data);
  }
};

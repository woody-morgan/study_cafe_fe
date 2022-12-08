import { customAxios } from '../lib/customAxios';

export interface ICafe {
  id: number;
  name: string;
  description: string;
  mainImageUrl: string;
  latitude: number;
  longitude: number;
  region: string;
  createdDate: string;
  modifiedDate: string;
  premium: boolean;
}

interface ApiGetAllCafeListRes {
  cafeList: ICafe[];
}

export const apiGetAllCafeList = async () => {
  try {
    const { data } = await customAxios().get<ApiGetAllCafeListRes>(`/api/v1/cafes/list/all`);
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

import { customAxios } from '../lib/customAxios';
import { ICafe } from './apiCafe';

export interface IMenu {
  menuId: number;
  cafeId: number;
  cafeName: string;
  beverageId: number;
  beverageName: string;
  price: number;
  mainImageUrl: string;
  isPremium: boolean;
  createdDate: string;
  modifiedDate: string;
}

interface ApiGetMenuByCafeIdRes {
  menuList: IMenu[];
  cafe: ICafe;
}

export const apiGetMenuByCafeId = async (cafeId: string) => {
  try {
    const { data } = await customAxios().get<ApiGetMenuByCafeIdRes>(`/api/v1/menus/list/${cafeId}`);
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

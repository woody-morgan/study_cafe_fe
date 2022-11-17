export interface IMenuInfo {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface ApiGetRecentOrdersResponse {
  menus: IMenuInfo & { orderedAt: string }[];
}

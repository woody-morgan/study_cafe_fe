import { SVGTypes } from '@src/components/ui/atom/Icon/Icon';

export type SiteRouterType = {
  path: string;
  name: string;
  icon: SVGTypes;
};

export const navRouter: SiteRouterType[] = [
  {
    path: '/cafe/1',
    name: 'Home',
    icon: 'home',
  },
  {
    path: '/menu',
    name: 'Drink Menu',
    icon: 'coffee',
  },
  {
    path: '/order',
    name: 'Your Order',
    icon: 'receipt',
  },
  {
    path: '/favorite',
    name: 'Favorites',
    icon: 'heartEmpty',
  },
];

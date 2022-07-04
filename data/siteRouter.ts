import { SVGTypes } from '@src/components/common/Icon/Icon'

export type SiteRouterType = {
  path: string
  name: string
  icon: SVGTypes
}

export const siteRouter: SiteRouterType[] = [
  {
    path: '/',
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
    icon: 'heart',
  },
]

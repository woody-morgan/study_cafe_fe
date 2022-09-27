import { SVGTypes } from '@src/components/ui/atom/Icon/Icon';

export type GameControllerItemProps = {
  name: string;
  icon: SVGTypes;
  callback: () => void;
};

export const gameControllerItems: GameControllerItemProps[] = [
  {
    name: 'up',
    icon: 'upArrow',
    callback: () => {
      alert('do something');
    },
  },
  {
    name: 'down',
    icon: 'downArrow',
    callback: () => {
      alert('do something');
    },
  },
  {
    name: 'left',
    icon: 'leftArrow',
    callback: () => {
      alert('do something');
    },
  },
  {
    name: 'right',
    icon: 'rightArrow',
    callback: () => {
      alert('do something');
    },
  },
];

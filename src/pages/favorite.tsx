import { PageLayout } from '@src/components/layout';
import { FavoriteMenuCard } from '@src/components/ui/molecule/Cards';
import React from 'react';

const FavoritePage = () => {
  return (
    <PageLayout>
      <div className="py-8">
        <div className="flex basis-1/2 flex-wrap justify-evenly gap-4">
          <FavoriteMenuCard
            heartFilled
            menu="Iced Americano"
            price="2000W"
            onHeartClick={() => {}}
          />
          <FavoriteMenuCard
            heartFilled
            menu="Iced Americano"
            price="2000W"
            onHeartClick={() => {}}
          />
          <FavoriteMenuCard
            heartFilled
            menu="Iced Americano"
            price="2000W"
            onHeartClick={() => {}}
          />{' '}
          <FavoriteMenuCard
            heartFilled
            menu="Iced Americano"
            price="2000W"
            onHeartClick={() => {}}
          />{' '}
          <FavoriteMenuCard
            heartFilled
            menu="Iced Americano"
            price="2000W"
            onHeartClick={() => {}}
          />{' '}
          <FavoriteMenuCard
            heartFilled
            menu="Iced Americano"
            price="2000W"
            onHeartClick={() => {}}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default FavoritePage;

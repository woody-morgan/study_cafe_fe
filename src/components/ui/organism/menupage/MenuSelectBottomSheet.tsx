import React, { FC, useMemo } from 'react';
import { BottomSheetLayout } from '@src/components/layout';
import { Carousel } from '../../wrapper';
import { MenuSelectCard } from '../../molecule/Cards';
import { IMenuInfo } from '@src/core/interface/menu-info';
import { useSessionStorage } from '@src/hooks';

const MenuSelectBottomSheet: FC<{
  sheetPosition?: string;
  selectedPage: number;
  direction: number;
  onPageChange: (idx: number, pageDir) => void;
}> = ({ sheetPosition, ...props }) => {
  const sampleMenuInfo = useMemo<IMenuInfo>(
    () => ({
      name: '아이스 아메리카노',
      description: '차갑게 즐기는 아메리카노',
      price: '1000원',
      image: '/static/coffee.png',
      orderedAt: '2022:01:01',
    }),
    []
  );

  const [_, setStoredMenu] = useSessionStorage<IMenuInfo>({
    key: 'order',
    initialValue: null,
  });

  return (
    <BottomSheetLayout sheetPosition={sheetPosition}>
      <Carousel {...props}>
        {Array(3)
          .fill(0)
          .map((_, idx) => {
            return (
              <div
                key={`sheet-item-container-${idx}`}
                className="flex flex-col flex-shrink-0 w-full px-8 py-4 space-y-4 overflow-y-scroll"
              >
                {Array(6)
                  .fill(0)
                  .map((_, idx) => {
                    return (
                      <MenuSelectCard
                        key={`sheet-item-${idx}`}
                        menuInfo={sampleMenuInfo}
                        onAddToCart={() => {
                          setStoredMenu(sampleMenuInfo);
                          alert(`${sampleMenuInfo.name}가 장바구니에 담겼습니다.`);
                        }}
                      />
                    );
                  })}
              </div>
            );
          })}
      </Carousel>
    </BottomSheetLayout>
  );
};

export default MenuSelectBottomSheet;

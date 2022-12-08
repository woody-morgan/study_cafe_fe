import React, { FunctionComponent } from 'react';
import { BottomSheetLayout } from '@src/components/layout';
import { Carousel } from '../../wrapper';
import { MenuSelectCard } from '../../molecule/Cards';
import { useSessionStorage } from '@src/hooks';
import { IMenu } from '@src/core/api/apiMenu';
import { useRouter } from 'next/router';

const MenuSelectBottomSheet: FunctionComponent<{
  numOfPages: number;
  menuData: IMenu[];
  selectedPage: number;
  direction: number;
  onPageChange: (idx: number, pageDir) => void;
}> = ({ numOfPages, menuData, ...props }) => {
  const router = useRouter();
  const [_, setStoredMenu] = useSessionStorage<IMenu>({
    key: 'order',
    initialValue: null,
  });

  return (
    <BottomSheetLayout open translateTo="translate-y-40">
      <Carousel {...props}>
        {Array(numOfPages)
          .fill(0)
          .map((_, idx) => {
            return (
              <div
                key={`sheet-item-container-${idx}`}
                className="flex flex-col flex-shrink-0 w-full px-8 pt-4 pb-12 space-y-4 overflow-y-scroll"
              >
                {menuData.map((menu, idx) => {
                  return (
                    <MenuSelectCard
                      key={`sheet-item-${idx}`}
                      menu={menu}
                      onAddToCart={() => {
                        setStoredMenu(menu);
                        router.push(`/cafe/${menu.cafeId}/order`);
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

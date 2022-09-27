import React, { FC } from 'react';
import { Carousel } from '@src/components/ui/atom';
import MenuItemAddSection from '@src/components/ui/molecule/ItemPhotoWithDescription';
import { BottomSheetLayout } from '@src/components/layout';

//Todo Apply Api Call

const MenuSelectBottomSheet: FC<{
  sheetPosition?: string;
  selectedPage: number;
  direction: number;
  onPageChange: (idx: number, pageDir) => void;
}> = ({ sheetPosition, ...props }) => {
  return (
    <BottomSheetLayout sheetPosition={sheetPosition}>
      <Carousel {...props} removeArrow>
        {Array(3)
          .fill(0)
          .map((_, idx) => {
            return (
              <div
                key={`sheet-item-container-${idx}`}
                className="flex flex-col flex-shrink-0 w-full px-8 py-4 space-y-4 overflow-y-scroll"
              >
                {Array(5)
                  .fill(0)
                  .map((_, idx) => {
                    return <MenuItemAddSection key={`sheet-item-${idx}`} />;
                  })}
              </div>
            );
          })}
      </Carousel>
    </BottomSheetLayout>
  );
};

export default MenuSelectBottomSheet;

import React, { FunctionComponent, useMemo } from 'react';
import { SearchBar } from '@src/components/ui/atom';
import { useInput, usePagination } from '@src/hooks';
import { MenuSelectBottomSheet } from '@src/components/ui/organism';
import { HorizontalItemList } from '@src/components/ui/wrapper';
import { IMenu } from '@src/core/api/apiMenu';

interface Props {
  cafeMenu: IMenu[];
}

const MenuPageTemplate: FunctionComponent<Props> = ({ cafeMenu }) => {
  const MenuList = useMemo(() => ['premium', 'others'], []);
  const PremiumMenu = useMemo(() => cafeMenu.filter((menu) => menu.isPremium === true), [cafeMenu]);
  const NonPremiumMenu = useMemo(
    () => cafeMenu.filter((menu) => menu.isPremium === false),
    [cafeMenu]
  );

  const [searchInput, handleSearchInput] = useInput('');
  const [[page, pageDir], setPage] = usePagination();

  return (
    <div className="flex flex-col space-y-4 py-2">
      <SearchBar placeholder="Search.." value={searchInput} onChange={handleSearchInput} />
      <HorizontalItemList
        items={MenuList}
        selectedIdx={page}
        onItemClick={(idx) => setPage((prev) => [idx, idx - prev[0] >= 0 ? 1 : -1])}
      />
      <MenuSelectBottomSheet
        numOfPages={MenuList.length}
        menuData={page === 0 ? PremiumMenu : NonPremiumMenu}
        selectedPage={page}
        direction={pageDir}
        onPageChange={(idx, pageDir) => setPage([idx, pageDir])}
      />
    </div>
  );
};

export default MenuPageTemplate;

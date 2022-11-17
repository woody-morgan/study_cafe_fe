import React, { useMemo } from 'react';
import { PageLayout } from '@src/components/layout';
import { NextPage } from 'next';
import { SearchBar } from '@src/components/ui/atom';
import { useInput, usePagination } from '@src/hooks';
import { MenuSelectBottomSheet } from '@src/components/ui/organism';
import { HorizontalItemList } from '@src/components/ui/wrapper';

const MenuPage: NextPage = () => {
  const MenuList = useMemo(() => ['coffee', 'chocolate', 'others'], []);

  const [searchInput, handleSearchInput] = useInput('');
  const [[page, pageDir], setPage] = usePagination();

  return (
    <PageLayout showNavigation fixedHeight headerContent={<span>Would you like to drink</span>}>
      <div className="flex flex-col space-y-4 py-2">
        <SearchBar placeholder="Search.." value={searchInput} onChange={handleSearchInput} />
        <HorizontalItemList
          items={MenuList}
          selectedIdx={page}
          onItemClick={(idx) => setPage((prev) => [idx, idx - prev[0] >= 0 ? 1 : -1])}
        />
        <MenuSelectBottomSheet
          sheetPosition="top-40"
          selectedPage={page}
          direction={pageDir}
          onPageChange={(idx, pageDir) => setPage([idx, pageDir])}
        />
      </div>
    </PageLayout>
  );
};

export default MenuPage;

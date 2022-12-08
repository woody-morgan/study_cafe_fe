import React from 'react';
import { PageLayout } from '@src/components/layout';
import { NextPage } from 'next';

import { MenuPageTemplate } from '@src/components/template';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';
import { apiGetMenuByCafeId, IMenu } from '@src/core/api/apiMenu';
import { ICafe } from '@src/core/api/apiCafe';

interface Props {
  cafeId: string;
  cafeMenu: IMenu[];
  cafeInfo: ICafe;
}

export const getServerSideProps = async (ctx) => {
  const cafeId = ctx.query.cafeId;
  const data = await apiGetMenuByCafeId(cafeId);

  return {
    props: {
      cafeId,
      cafeMenu: data.menuList,
      cafeInfo: data.cafe,
    },
  };
};

const MenuPageHeader = () => <CommonHeader title="메뉴를 골라주세요" titleStyle="text-base" />;

const MenuPage: NextPage<Props> = ({ cafeId, cafeMenu, cafeInfo }) => {
  return (
    <PageLayout cafeId={cafeId} showNavigation fixedHeight headerContent={<MenuPageHeader />}>
      <MenuPageTemplate cafeMenu={cafeMenu} />
    </PageLayout>
  );
};

export default MenuPage;

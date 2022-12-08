import React from 'react';
import { PageLayout } from '@src/components/layout';
import { NextPage } from 'next';

import { MenuPageTemplate } from '@src/components/template';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';

interface Props {
  cafeId: string;
}

export const getServerSideProps = async (ctx) => {
  const cafeId = ctx.query.cafeId;

  return {
    props: {
      cafeId,
    },
  };
};

const MenuPageHeader = () => (
  <CommonHeader title="Would you like to drink" titleStyle="text-base" />
);

const MenuPage: NextPage<Props> = ({ cafeId }) => {
  return (
    <PageLayout cafeId={cafeId} showNavigation fixedHeight headerContent={<MenuPageHeader />}>
      <MenuPageTemplate />
    </PageLayout>
  );
};

export default MenuPage;

import React from 'react';
import { PageLayout } from '@src/components/layout';
import { NextPage } from 'next';

import { MenuPageTemplate } from '@src/components/template';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';

const MenuPageHeader = () => (
  <CommonHeader title="Would you like to drink" titleStyle="text-base" />
);

const MenuPage: NextPage = () => {
  return (
    <PageLayout showNavigation fixedHeight headerContent={<MenuPageHeader />}>
      <MenuPageTemplate />
    </PageLayout>
  );
};

export default MenuPage;

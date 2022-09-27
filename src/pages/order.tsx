import React from 'react';
import { PageLayout } from '@src/components/layout';
import CommonHeaderContent from '@src/components/layout/PageLayout/CommonHeaderContent';

const OrderPage = () => {
  return (
    <PageLayout fullWidth showNavigation headerContent={<CommonHeaderContent />}>
      OrderPage
    </PageLayout>
  );
};

export default OrderPage;

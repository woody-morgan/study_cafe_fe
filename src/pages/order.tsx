import React, { useEffect } from 'react';
import { PageLayout } from '@src/components/layout';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';
import { useSessionStorage } from '@src/hooks';
import { OrderPageTemplate } from '@src/components/template';
import { IMenuInfo } from '@src/core/interface/menu-info';

const OrderPageHeader = () => <CommonHeader title="Your orders" titleStyle="bg-transparent" />;

const OrderPage = () => {
  const [value, _] = useSessionStorage<IMenuInfo>({
    key: 'order',
    initialValue: null,
  });

  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <PageLayout showNavigation headerTransparent headerContent={<OrderPageHeader />}>
      <OrderPageTemplate storedMenu={value} />
    </PageLayout>
  );
};

export default OrderPage;

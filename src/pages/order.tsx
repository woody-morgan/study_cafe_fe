import React, { useEffect } from 'react';
import { PageLayout } from '@src/components/layout';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';
import { useSessionStorage } from '@src/hooks';
import { OrderPageTemplate } from '@src/components/template';

const OrderPageHeader = () => <CommonHeader title="Your orders" titleStyle="bg-transparent" />;

const OrderPage = () => {
  const [value, setValue] = useSessionStorage({
    key: 'order',
    initialValue: 'order',
  });

  useEffect(() => {
    setValue('order1');
  }, [setValue, value]);

  return (
    <PageLayout showNavigation headerTransparent headerContent={<OrderPageHeader />}>
      <OrderPageTemplate />
    </PageLayout>
  );
};

export default OrderPage;

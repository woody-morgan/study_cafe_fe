import React from 'react';
import { PageLayout } from '@src/components/layout';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';
import { useSessionStorage } from '@src/hooks';
import { OrderPageTemplate } from '@src/components/template';
import { IMenuInfo } from '@src/core/interface/menu-info';

const OrderPageHeader = () => <CommonHeader title="Your orders" titleStyle="bg-transparent" />;

const OrderPage = () => {
  const [storedMenu, setStoredMenu] = useSessionStorage<IMenuInfo>({
    key: 'order',
    initialValue: null,
  });

  return (
    <PageLayout showNavigation headerTransparent headerContent={<OrderPageHeader />}>
      <OrderPageTemplate
        storedMenu={storedMenu}
        onOrderRecents={(newMenu) => {
          setStoredMenu(newMenu);
        }}
      />
    </PageLayout>
  );
};

export default OrderPage;

import React, { useEffect } from 'react';
import { PageLayout } from '@src/components/layout';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';
import { useSessionStorage } from '@src/hooks';
import { OrderPageTemplate } from '@src/components/template';
import { NextPage } from 'next';
import { apiGetMenuByCafeId, IMenu } from '@src/core/api/apiMenu';
import { useRouter } from 'next/router';
import { ToastError } from '@src/utils/toast';

interface Props {
  paymentFailed: boolean;
  cafeId: string;
  allCafeMenu: IMenu[];
}

export const getServerSideProps = async (ctx) => {
  const cafeId = ctx.query.cafeId;
  const paymentFailed = ctx.query.fail === 'true';
  const data = await apiGetMenuByCafeId(cafeId);

  return {
    props: {
      cafeId,
      paymentFailed,
      allCafeMenu: data.menuList,
    },
  };
};

const OrderPageHeader = () => <CommonHeader title="내 주문" titleStyle="bg-transparent" />;

const OrderPage: NextPage<Props> = ({ cafeId, paymentFailed, allCafeMenu }) => {
  const router = useRouter();
  const [storedMenu, setStoredMenu] = useSessionStorage<IMenu>({
    key: 'order',
    initialValue: null,
  });

  useEffect(() => {
    if (storedMenu && storedMenu.cafeId !== parseInt(cafeId)) {
      setStoredMenu(null);
    }
    if (paymentFailed) {
      ToastError('결제에 실패했습니다. 다시 시도해주세요.');
      router.replace(`/cafe/${cafeId}/order`);
    }
  }, [cafeId, paymentFailed, router, setStoredMenu, storedMenu]);

  return (
    <PageLayout
      cafeId={cafeId}
      showNavigation
      headerTransparent
      headerContent={<OrderPageHeader />}
    >
      <OrderPageTemplate
        allCafeMenu={allCafeMenu}
        storedMenu={storedMenu}
        onOrderRecents={(newMenu) => {
          setStoredMenu(newMenu);
        }}
      />
    </PageLayout>
  );
};

export default OrderPage;

import { envConfig } from '@src/core/config/envConfig.js';
import { usePagination } from '@src/hooks';
import dynamic from 'next/dynamic';
import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { Button } from '../ui/atom';
import { OrderInfoCard } from '../ui/molecule/Cards';
import { HorizontalItemList } from '../ui/wrapper';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { IMenu } from '@src/core/api/apiMenu';
import { ToastInfo } from '@src/utils/toast';
import { v4 as uuid } from 'uuid';

const OrderPageTemplate: FunctionComponent<{
  allCafeMenu: IMenu[];
  storedMenu: IMenu;
  onOrderRecents: (newMenu: IMenu) => void;
}> = ({ allCafeMenu, storedMenu, onOrderRecents }) => {
  const orderTapList = useMemo(() => ['장바구니', '최근 주문'], []);
  const [[page], setPage] = usePagination();

  const handleOrder = async () => {
    const tossPayments = await loadTossPayments(envConfig.tossPaymentKey);
    tossPayments.requestPayment('카드', {
      amount: storedMenu.price,
      orderId: 'order-' + uuid(),
      orderName: storedMenu.beverageName,
      customerName: '익명',
      successUrl: `${envConfig.appBaseUrl}/cafe/${storedMenu.cafeId}/threespace`,
      failUrl: `${envConfig.appBaseUrl}/cafe/${storedMenu.cafeId}/order?fail=true`,
    });
  };

  const RenderRecents = useMemo(() => {
    const _render = () => {
      return (
        <Fragment>
          {allCafeMenu.map((cafeMenu, idx) => (
            <OrderInfoCard
              key={`order-info-card-${idx}`}
              image={cafeMenu.mainImageUrl}
              menuName={cafeMenu.beverageName}
              onAddToCart={() => {
                ToastInfo(`장바구니에 ${cafeMenu.beverageName}를 담았습니다.`);
                onOrderRecents(cafeMenu);
              }}
            />
          ))}
        </Fragment>
      );
    };
    return _render;
  }, [allCafeMenu, onOrderRecents]);

  const RenderOrderItems = () => {
    if (page === 0) {
      return storedMenu ? (
        <Fragment>
          <OrderInfoCard image={storedMenu.mainImageUrl} menuName={storedMenu.beverageName} />
          <Button fullWidth onClick={handleOrder}>
            주문하기
          </Button>
        </Fragment>
      ) : (
        <div>
          <p className="text-center">장바구니에 담긴 상품이 없습니다.</p>
        </div>
      );
    } else if (page === 1) {
      return <RenderRecents />;
    } else {
      return <div>에러 발생</div>;
    }
  };

  return (
    <div className="space-y-6 h-auto">
      <div className="w-48 text-sm">
        <HorizontalItemList
          textSize="xsmall"
          items={orderTapList}
          selectedIdx={page}
          onItemClick={(idx) => setPage((prev) => [idx, idx - prev[0] >= 0 ? 1 : -1])}
        />
      </div>
      <div className="space-y-4">
        <RenderOrderItems />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(OrderPageTemplate), { ssr: false });

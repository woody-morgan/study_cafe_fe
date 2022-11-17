import { IMenuInfo } from '@src/core/interface/menu-info';
import { usePagination } from '@src/hooks';
import { useRouter } from 'next/router';
import React, { Fragment, FunctionComponent, useEffect, useMemo } from 'react';
import { OrderInfoCard } from '../ui/molecule/Cards';
import { HorizontalItemList } from '../ui/wrapper';

const OrderPageTemplate: FunctionComponent<{
  storedMenu: IMenuInfo;
}> = ({ storedMenu }) => {
  const router = useRouter();
  const orderTapList = useMemo(() => ['장바구니', '최근 주문'], []);
  const [[page], setPage] = usePagination();

  useEffect(() => {
    console.log(router.query);
  }, [router]);

  const RenderOrderItems = () => {
    if (page === 0) {
      return storedMenu ? (
        <OrderInfoCard
          linkTo={`/order?id=${storedMenu.name}`}
          image="/static/coffee.png"
          menuName={storedMenu.name}
          orderDate="2022:01:01"
        />
      ) : (
        <div>
          <p className="text-center">장바구니에 담긴 상품이 없습니다.</p>
        </div>
      );
    } else if (page === 1) {
      return (
        <Fragment>
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <OrderInfoCard
                key={`order-info-card-${idx}`}
                linkTo={`/order?id=${idx}`}
                image="/static/coffee.png"
                menuName="Iced Coffee Sweet Heaven"
                orderDate="2022:01:01"
              />
            ))}
        </Fragment>
      );
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

export default OrderPageTemplate;

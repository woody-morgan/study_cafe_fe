import { IMenuInfo } from '@src/core/interface/menu-info';
import { usePagination } from '@src/hooks';
import dynamic from 'next/dynamic';
import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { Button } from '../ui/atom';
import { OrderInfoCard } from '../ui/molecule/Cards';
import { HorizontalItemList } from '../ui/wrapper';

const OrderPageTemplate: FunctionComponent<{
  storedMenu: IMenuInfo;
  onOrderRecents: (newMenu: IMenuInfo) => void;
}> = ({ storedMenu, onOrderRecents }) => {
  const orderTapList = useMemo(() => ['장바구니', '최근 주문'], []);
  const [[page], setPage] = usePagination();

  const handleOrder = async () => {
    // TODO: call order api
    alert('주문이 완료되었습니다.');
  };

  const RenderOrderItems = () => {
    if (page === 0) {
      return storedMenu ? (
        <Fragment>
          <OrderInfoCard image="/static/coffee.png" menuName={storedMenu.name} />
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
      return (
        <Fragment>
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <OrderInfoCard
                key={`order-info-card-${idx}`}
                image="/static/coffee.png"
                menuName="아이스 아메리카노"
                orderDate="2021:12:24"
                onAddToCart={() => {
                  alert('장바구니에 담겼습니다.');
                  onOrderRecents({
                    id: 'alksdjflaksdjf',
                    name: '아이스 아메리카노',
                    description: '차갑게 즐기는 아메리카노',
                    price: '1000원',
                    image: '/static/coffee.png',
                  });
                }}
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

export default dynamic(() => Promise.resolve(OrderPageTemplate), { ssr: false });

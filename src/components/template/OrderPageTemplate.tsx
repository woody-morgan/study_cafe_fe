import { usePagination } from '@src/hooks';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { OrderInfoCard } from '../ui/molecule/Cards';
import { HorizontalItemList } from '../ui/wrapper';

const OrderPageTemplate = () => {
  const router = useRouter();
  const orderTapList = useMemo(() => ['Recently', 'Past Orders'], []);
  const [[page], setPage] = usePagination();

  useEffect(() => {
    console.log(router.query);
  }, [router]);

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
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <OrderInfoCard
              key={`order-info-card-${idx}`}
              linkTo={`/order?id=${idx}`}
              image="/static/coffee.png"
              menuName="Iced Coffee Sweet Heaven"
              orderDate="2022:01:01"
              quantity={2}
            />
          ))}
      </div>
    </div>
  );
};

export default OrderPageTemplate;

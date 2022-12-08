import React, { FunctionComponent } from 'react';
import { MenuInfoCard, MenuPriceCard, NewMenuCard } from '@src/components/ui/molecule/Cards';
import { Section, Slider } from '../ui/wrapper';
import { IMenu } from '@src/core/api/apiMenu';

interface Props {
  cafeId: string;
  cafeMenu: IMenu[];
}

const CafePageTemplate: FunctionComponent<Props> = ({ cafeId, cafeMenu }) => {
  const bestSeller = cafeMenu.length > 0 ? cafeMenu[0] : null;
  const repMenu = cafeMenu.length > 1 ? cafeMenu[1] : null;

  return (
    <div className="space-y-4 py-2">
      {bestSeller && (
        <Section className="px-side-padding">
          <MenuInfoCard
            title="이번주 메뉴"
            description={bestSeller.beverageName}
            linkTo={`/cafe/${cafeId}/menu`}
            imageUrl={bestSeller.mainImageUrl}
          />
        </Section>
      )}

      <Section className="pl-side-padding" title={'이번주 메뉴'}>
        <Slider divider="main-price" className="space-x-6">
          {cafeMenu.length > 0 &&
            cafeMenu.map((menu) => (
              <MenuPriceCard
                linkTo={`/cafe/${cafeId}/menu`}
                key={`cafe-menu-${menu.beverageId}`}
                menu={menu.beverageName}
                price={'300원'}
                imageUrl={menu.mainImageUrl}
              />
            ))}
        </Slider>
      </Section>
      {repMenu && (
        <Section className="px-side-padding" title={'카페 메뉴'}>
          <NewMenuCard
            title={repMenu.beverageName}
            description="새로운 메뉴를 즐겨보세요"
            linkTo={`/cafe/${cafeId}/menu`}
            image={repMenu.mainImageUrl}
          />
        </Section>
      )}
    </div>
  );
};

export default CafePageTemplate;

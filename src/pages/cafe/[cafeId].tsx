import { PageLayout } from '@src/components/layout';
import { CafePageTemplate } from '@src/components/template';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';
import { ICafe } from '@src/core/api/apiCafe';
import { apiGetMenuByCafeId, IMenu } from '@src/core/api/apiMenu';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

interface Props {
  cafeId: string;
  cafeMenu: IMenu[];
  cafeInfo: ICafe;
}

export const getServerSideProps = async (ctx) => {
  const { cafeId } = ctx.query;
  const data = await apiGetMenuByCafeId(cafeId);
  return {
    props: {
      cafeId,
      cafeMenu: data.menuList,
      cafeInfo: data.cafe,
    },
  };
};

const CafeByIdPage: NextPage<Props> = ({ cafeId, cafeMenu, cafeInfo }) => {
  useEffect(() => {
    (async () => {
      const data = await apiGetMenuByCafeId(cafeId as string);
    })();
  }, [cafeId]);

  return (
    <PageLayout
      cafeId={cafeId}
      fullWidth
      showNavigation
      headerContent={<CommonHeader title={`스터디카페 ${cafeInfo.name}`} />}
    >
      <CafePageTemplate cafeId={cafeId as string} cafeMenu={cafeMenu} />
    </PageLayout>
  );
};

export default CafeByIdPage;

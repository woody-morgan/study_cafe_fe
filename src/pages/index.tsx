import React from 'react';
import { NextPage } from 'next';
import { PageLayout } from '@src/components/layout';
import { GoogleMaps } from '@src/components/ui/atom';
import { apiGetAllCafeList, ICafe } from '@src/core/api/apiCafe';

interface Props {
  cafeList: ICafe[];
}

export const getServerSideProps = async () => {
  const { cafeList } = await apiGetAllCafeList();
  return {
    props: {
      cafeList,
    },
  };
};

const IndexPage: NextPage<Props> = ({ cafeList }) => {
  return (
    <PageLayout fullWidth fixedHeight>
      <div className="w-full h-full">
        <GoogleMaps center={{ lat: 37.52974, lng: 126.962721 }} cafeList={cafeList} />
      </div>
    </PageLayout>
  );
};

export default IndexPage;

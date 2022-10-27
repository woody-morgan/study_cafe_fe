import React from 'react';
import { NextPage } from 'next';
import { PageLayout } from '@src/components/layout';
import { GoogleMaps } from '@src/components/ui/atom';

const IndexPage: NextPage = () => {
  return (
    <PageLayout fullWidth fixedHeight>
      <div className="w-full h-full">
        <GoogleMaps
          center={{ lat: 37.52974, lng: 126.962721 }}
          pins={[
            { lat: 37.52974, lng: 126.952721 },
            {
              lat: 37.52974,
              lng: 126.962721,
            },
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default IndexPage;

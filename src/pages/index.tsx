import React from 'react';
import { NextPage } from 'next';
import { PageLayout } from '@src/components/layout';
import { HomePageTemplate } from '@src/components/template';
import CommonHeaderContent from '@src/components/layout/PageLayout/CommonHeaderContent';

const IndexPage: NextPage = () => {
  return (
    <PageLayout fullWidth showNavigation headerContent={<CommonHeaderContent />}>
      <HomePageTemplate />
    </PageLayout>
  );
};

export default IndexPage;

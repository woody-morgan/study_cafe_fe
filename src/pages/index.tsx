import React from 'react';
import { NextPage } from 'next';
import { PageLayout } from '@src/components/layout';
import { HomePageTemplate } from '@src/components/template';

const IndexPage: NextPage = () => {
  return (
    <PageLayout fullWidth showNavigation>
      <HomePageTemplate />
    </PageLayout>
  );
};

export default IndexPage;

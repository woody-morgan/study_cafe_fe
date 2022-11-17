import { PageLayout } from '@src/components/layout';
import { CafePageTemplate } from '@src/components/template';
import { useRouter } from 'next/router';
import React from 'react';

const CafeByIdPage = () => {
  const router = useRouter();
  const { cafeId } = router.query;
  return (
    <PageLayout fullWidth showNavigation>
      <CafePageTemplate />
    </PageLayout>
  );
};

export default CafeByIdPage;

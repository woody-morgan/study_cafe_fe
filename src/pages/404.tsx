import { Button } from '@src/components/ui/atom';
import { PageLayout } from '@src/components/layout';
import Link from 'next/link';
import React from 'react';

const FourZeroFourPage = () => {
  return (
    <PageLayout fixedHeight showNavigation>
      <div className="h-full flex flex-col justify-center items-center space-y-3">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <Link href="/">
          <Button className="text-white font-bold">Back to Home</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default FourZeroFourPage;

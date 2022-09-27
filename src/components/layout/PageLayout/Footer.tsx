import React from 'react';
import siteMetadata from 'data/siteMetadata';

const Footer = () => {
  const com = siteMetadata.company;

  return (
    <div className="bg-transparent border-t-2 border-solid border-black/50">
      <footer className="pt-12 pb-20 space-y-10 max-w-appMaxWidth mx-auto px-4 sm:px-8">
        <div className="flex flex-col justify-start space-y-2">
          <h5>{com.name}</h5>
          <h5>Contact : {com.email}</h5>
          <h5>{com.address}</h5>
          <h5>© Copyright 2022 by {com.name}. All rights reserved</h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

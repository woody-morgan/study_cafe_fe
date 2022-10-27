import { siteMetadata } from '@src/core/config/siteMetadata';
import React from 'react';

const Footer = () => {
  const { name, email, address } = siteMetadata.company;

  return (
    <div className="bg-transparent border-t-2 border-solid border-black/50">
      <footer className="pt-12 pb-20 space-y-10 max-w-appMaxWidth mx-auto px-4 sm:px-8">
        <div className="flex flex-col justify-start space-y-2">
          <h5>{name}</h5>
          <h5>Contact : {email}</h5>
          <h5>{address}</h5>
          <h5>© Copyright 2022 by {name}. All rights reserved</h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

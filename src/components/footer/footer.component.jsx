import React from 'react';
import { FooterContainer } from './footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>&copy; {currentYear} Gurwinderjit Singh. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

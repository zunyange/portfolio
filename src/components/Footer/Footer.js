import React from 'react';
import styled from 'styled-components';
import { Width } from '../../styles/common.js';

const Footer = () => {
  return (
    <FooterWrap>
      <Width>
        <Footertext>
          Copyright © 2023 KimJunyoung. All right reserved.
        </Footertext>
      </Width>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  height: 100px;
  width: 100%;
`;
const Footertext = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 3% 0;
  font-size: 13px;
`;
// const Footer = styled.div``;

export default Footer;

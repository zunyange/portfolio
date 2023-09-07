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
  background-color: rgba(245, 251, 255, 0.4);
  @media ${({ theme }) => theme.device.mobile} {
    height: 50px;
  }
`;

const Footertext = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 3% 0;
  font-size: 13px;
  color: #a4a4a4;
`;

export default Footer;

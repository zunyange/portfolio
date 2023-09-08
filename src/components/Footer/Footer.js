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
  width: 100%;
  background-color: #f5fbff;
`;

const Footertext = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 3% 0;
  font-size: 13px;
  color: #a4a4a4;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 5% 0;
  }
`;

export default Footer;

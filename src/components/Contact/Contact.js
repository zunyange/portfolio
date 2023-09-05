import React from 'react';
import * as S from './ContactStyled.js';
import { Width } from '../../styles/common.js';

const Contact = ({ contact }) => {
  return (
    <S.Contact ref={contact}>
      <Width>
        <S.ContactContainer>
          <S.Title>Let's Get in Touch</S.Title>
          <S.ContactWrap>-</S.ContactWrap>
        </S.ContactContainer>
      </Width>
    </S.Contact>
  );
};

export default Contact;

import React from 'react';
import * as S from './ContactStyled.js';
import { Width } from '../../styles/common.js';

const Contact = ({ contact }) => {
  return (
    <S.Contact ref={contact}>
      <Width>
        <S.ContactContainer>
          <S.Title>Let's Get in Touch</S.Title>
          <S.ContactWrap>
            <S.GoTo>
              <a
                href="https://github.com/zunyange"
                target="_blank"
                rel="noreferrer noopener"
              >
                <S.GoToGithub src="/images/icon/github-bk.png" alt="Github" />
              </a>
              <a
                href="https://velog.io/@zunyange"
                target="_blank"
                rel="noreferrer noopener"
              >
                <S.GoToVelog src="/images/icon/velog-green.png" alt="Velog" />
              </a>
              <a
                href="https://www.linkedin.com/in/junyoung-kim-067765281/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <S.GoToLinkedin
                  src="/images/icon/linkedin-bk.png"
                  alt="Linkedin"
                />
              </a>
              <a href="https://www.instagram.com/z_zxxn_n">
                <S.GoToInsta src="/images/icon/instagram.png" alt="Gmail" />
              </a>
              <a href="mailto:giveyoung530@gmail.com">
                <S.GoToMail src="/images/icon/mail-bk.png" alt="Gmail" />
              </a>
            </S.GoTo>
          </S.ContactWrap>
        </S.ContactContainer>
      </Width>
    </S.Contact>
  );
};

export default Contact;

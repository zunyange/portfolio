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
            {/* <S.GoTo>
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
            </S.GoTo> */}
            <S.GoTo>
              <S.GoToGithub>
                <a
                  href="https://github.com/zunyange"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/images/icon/github-bk.png" alt="Github" />
                  Follow on Github
                </a>
              </S.GoToGithub>
              <S.GoToVelog>
                <a
                  href="https://velog.io/@zunyange"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/images/icon/velog-bk.png" alt="Velog" />
                  Follow on Velog
                </a>
              </S.GoToVelog>
              <S.GoToLinkedin>
                <a
                  href="https://www.linkedin.com/in/giveyoung530/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/images/icon/linkedin-bk.png" alt="Linkedin" />
                  Follow on Linkedin
                </a>
              </S.GoToLinkedin>
              <S.GoToInsta>
                <a
                  href="https://www.instagram.com/z_zxxn_n"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/images/icon/instagram-bk.png" alt="Instagram" />
                  Follow on Instagram
                </a>
              </S.GoToInsta>
            </S.GoTo>
            <S.SendMail>
              <a
                href="mailto:giveyoung530@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="images/icon/email-fill.png" alt="mail" />
                giveyoung530@gmail.com
              </a>
            </S.SendMail>
          </S.ContactWrap>
        </S.ContactContainer>
      </Width>
    </S.Contact>
  );
};

export default Contact;

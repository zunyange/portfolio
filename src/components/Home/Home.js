import React, { useEffect, useState } from 'react';
import * as S from './HomeStyled.js';
import { Width } from '../../styles/common.js';

const Home = ({ home, onMoveAbout }) => {
  // const txt = '사용자 중심 설계에 중점을 둔 문제 해결사';
  // const txt = '김준영';
  const txt =
    '안녕하세요! 끈기와 열정으로 문제를 해결하는 개발자, 김준영입니다.';
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const AskToAdmit = () => {
    alert('이력서를 다운받으시겠습니까?');
  };

  return (
    <S.Home ref={home}>
      <Width>
        <S.IntroduceWrap>
          <S.Introduce>
            Web Frontend Developer
            <p>김준영</p>
          </S.Introduce>
          <S.SubIntroduce>
            {text}
            <br />
            다양한 삶과 문화에 대한 탐구심이 강하여 사용자의 다양한 니즈를
            충족시키고 해결하는 일을 즐기며, 팀을 위해 희생하고 배려할 줄 아는
            개발자입니다. (구체화,수치화하면 좋겠다.)
          </S.SubIntroduce>
          <S.GoTo>
            <a
              href="https://github.com/zunyange"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GoToGithub src="/images/icon/github.png" alt="Github" />
            </a>
            <a
              href="https://velog.io/@zunyange"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GoToVelog src="/images/icon/velog.png" alt="Velog" />
            </a>
            <a
              href="https://www.linkedin.com/in/junyoung-kim-067765281/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GoToLinkedin src="/images/icon/linkedin.png" alt="Linkedin" />
            </a>
            {/* <a href="mailto:giveyoung530@gmail.com">
              <S.GoToMail src="/images/mail.png" alt="Gmail" />
            </a> */}
            <S.GoToResume
              onClick={AskToAdmit}
              src="/images/icon/resume.png"
              alt="Resume"
            />
          </S.GoTo>
          <S.MoreWrap>
            <S.MoreAbout href="#aboutme" onClick={onMoveAbout} role="button">
              More about me
            </S.MoreAbout>
          </S.MoreWrap>
        </S.IntroduceWrap>
      </Width>
    </S.Home>
  );
};

export default Home;

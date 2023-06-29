import React, { useState, useEffect } from 'react';
import * as S from './HomeStyled.js';
import { Width } from '../../../styles/common.js';

const Home = () => {
  // const [i, setI] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setI(prevI => (prevI === 100 ? 0 : prevI + 1));
  //   }, 300);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // const backgroundStyle = {
  //   background: `linear-gradient(136deg,
  //     rgb(255, 127, 127),
  //     rgb(68, 132, 206),
  //     rgb(26, 215, 192),
  //     rgb(255, 155, 17),
  //     rgb(155, 89, 182),
  //     rgb(236, 240, 241)) 0% ${i}% / 1200% 1200%`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: '360px 570px',
  //   animation: 'BackgroundAnimation 70s ease infinite',
  // };

  return (
    // <S.Home style={backgroundStyle}>
    <S.Home>
      <Width>
        <S.IntroduceWrap>
          <S.Introduce>
            Web Frontend Developer
            <p>김준영</p>
            <S.SubIntroduce>
              안녕하세요 ! <S.Span first>포용력을 포옹한 개발자</S.Span>,
              김준영입니다. <br />
              다양한 삶과 문화에 대한 탐구심이 강하여 사용자의 다양한 니즈를
              충족시키고 해결하는 일을 즐기며, 팀을 위해 희생하고 배려할 줄 아는
              개발자입니다.
            </S.SubIntroduce>
            <S.SubIntroduceTwo>
              {/* <br /> */}
              현재는 성장하는 습관을 만들기 위해 기술 블로그에 꾸준히 기록하고
              있으며, 리팩토링과 새로운 기술 향상을 위해{' '}
              <S.Span>TypeScript </S.Span>
              기반의 프로젝트를 진행중입니다.
            </S.SubIntroduceTwo>
          </S.Introduce>
        </S.IntroduceWrap>
        <S.IntroduceImg src="images/MyImg2.png" />
      </Width>
    </S.Home>
  );
};

export default Home;

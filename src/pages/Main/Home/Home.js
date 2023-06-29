import React from 'react';
import * as S from './HomeStyled.js';
import { Width } from '../../../styles/common.js';

const Home = () => {
  return (
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
              <br />
              현재는 성장하는 습관을 만들기 위해 기술 블로그에 꾸준히 기록하고
              있으며, 리팩토링과 새로운 기술 향상을 위해{' '}
              <S.Span>TypeScript </S.Span>
              기반의 프로젝트를 진행중입니다.
            </S.SubIntroduce>
          </S.Introduce>
        </S.IntroduceWrap>
        <S.IntroduceImg src="images/MyImg2.png" />
      </Width>
    </S.Home>
  );
};

export default Home;

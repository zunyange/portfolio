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
          </S.Introduce>
          <S.SubIntroduce>
            안녕하세요 ! <S.Span first>포용력을 포옹한 개발자</S.Span>,
            김준영입니다. <br />
            다양한 삶과 문화에 대한 탐구심이 강하여 사용자의 다양한 니즈를
            충족시키고 해결하는 일을 즐기며, 팀을 위해 희생하고 배려할 줄 아는
            개발자입니다.
          </S.SubIntroduce>
          <S.GoTo>dd</S.GoTo>
        </S.IntroduceWrap>
      </Width>
    </S.Home>
  );
};

export default Home;

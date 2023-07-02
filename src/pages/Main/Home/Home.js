import React, { useEffect, useState } from 'react';
import * as S from './HomeStyled.js';
import { Width } from '../../../styles/common.js';

const Home = () => {
  // const txt = '사용자 중심 설계에 중점을 둔 문제 해결사';
  // const txt = '김준영';
  const txt = '안녕하세요 ! 포용력을 포옹한 개발자, 김준영입니다.';
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
  return (
    <S.Home>
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
            개발자입니다.
          </S.SubIntroduce>
          <S.GoTo>
            <S.GoToGithub src="/images/github.png" alt="Github" />
            <S.GoToVelog src="/images/velog.png" alt="Velog" />
            <S.GoToLinkedin src="/images/linkedin.png" alt="Linkedin" />
          </S.GoTo>
        </S.IntroduceWrap>
      </Width>
    </S.Home>
  );
};

export default Home;

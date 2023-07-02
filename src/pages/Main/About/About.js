import React from 'react';
import * as S from './AboutStyled.js';
import { Width } from '../../../styles/common';

const About = () => {
  return (
    <S.About>
      <Width>
        <S.SubIntroduce>
          현재는 성장하는 습관을 만들기 위해 기술 블로그에 꾸준히 기록하고
          있으며, 리팩토링과 새로운 기술 향상을 위해{' '}
          <S.Span>TypeScript </S.Span>
          기반의 프로젝트를 진행중입니다.
        </S.SubIntroduce>
        <S.IntroduceImg src="images/MyImg.png" />
      </Width>
    </S.About>
  );
};

export default About;

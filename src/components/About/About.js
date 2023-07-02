import React, { useState, useEffect } from 'react';
import * as S from './AboutStyled.js';
import { Width } from '../../styles/common.js';

const About = ({ about }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data/Skill.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <S.About ref={about}>
      <Width>
        {/* <S.Introduce>
          현재는 성장하는 습관을 만들기 위해 기술 블로그에 꾸준히 기록하고
          있으며, 리팩토링과 새로운 기술 향상을 위해{' '}
          <S.Span>TypeScript </S.Span>
          기반의 프로젝트를 진행중입니다.
        </S.Introduce> */}
        <S.SkillWrap>
          <S.Skill>Skill</S.Skill>
          <S.SkillBox>
            {data.map(info => {
              return (
                <div key={info.id}>
                  <img src={info.src} alt={info.name} />
                </div>
              );
            })}
          </S.SkillBox>
        </S.SkillWrap>
        <S.IntroduceImg src="images/MyImg.png" />
      </Width>
    </S.About>
  );
};

export default About;

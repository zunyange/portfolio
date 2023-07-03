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
        <S.Aboutme>
          <S.Title>About me</S.Title>
          <S.ProfileWrap>
            <S.Profile>
              <img src="/images/icon/profile.jpg" alt="ProfileImg" />
            </S.Profile>
            <S.ProfileBox>
              <S.Number>
                <img src="images/icon/phone.png" alt="phone" />
                &nbsp; 010-3186-3510
              </S.Number>
              <S.Mail>
                <a href="mailto:giveyoung530@gmail.com">
                  <img src="images/icon/mail1.png" alt="num" />
                  &nbsp; giveyoung530@gmail.com
                </a>
              </S.Mail>
              <S.School>
                <img src="images/icon/school.png" alt="school" />
                &nbsp; 경기대학교 관광개발학 졸업
              </S.School>
              <S.Appeal>
                <img src="images/icon/smile.png" alt="smile" />
                &nbsp; 어디에서나 긍정적인 태도로 임하는 자세를 중요하게
                생각합니다.
              </S.Appeal>
            </S.ProfileBox>
          </S.ProfileWrap>

          <S.SkillWrap>dd</S.SkillWrap>
        </S.Aboutme>
      </Width>
    </S.About>
  );
};

export default About;

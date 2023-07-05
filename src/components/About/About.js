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
                &nbsp; 어디에서나 긍정적인 태도로!
              </S.Appeal>
            </S.ProfileBox>
          </S.ProfileWrap>
          <S.SkillWrap>
            <S.SkillTitle>Skills</S.SkillTitle>
            <S.SkillBox>
              {data.map(info => {
                return (
                  <S.ImgWrap key={info.id}>
                    <img src={info.src} alt={info.name} />
                    <span>{info.name}</span>
                  </S.ImgWrap>
                );
              })}
            </S.SkillBox>
          </S.SkillWrap>
          <S.ExpWrap>
            <S.ExpTitle>Experience</S.ExpTitle>
            <S.ExpBox>
              <S.Enterprise>
                <img src="images/icon/Dabisu.png" alt="다비수디지탈" />
                <div>2023.04~2023.05</div>
              </S.Enterprise>
              <S.ExpConent title>
                다비수 디지탈 (아동 교육 콘텐츠 개발)
              </S.ExpConent>
              <S.ExpConent>
                • &nbsp;새로운 브랜드의 정보 서비스 구축 프로젝트로서, 반응형 웹
                UI 구현을 도맡아 함.
              </S.ExpConent>
              <S.ExpConent>
                • &nbsp;개발 부서의 모든 팀원과 지속적으로 소통 및 협업을
                하였고, 현업 개발자?사수?의 코드 리뷰를 통한 지속적인 코드를
                개선하여 제품 완성도와 품질을 높혔습니다.
              </S.ExpConent>
              <S.ExpConent>
                ✨ 현재 기업은 코드를 이어받아 제품의 연속성을 유지 및 향상시켜
                사이트를 배포하였습니다.
              </S.ExpConent>
              {/* <a
                href="https://dev.saedaron.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://dev.saedaron.com
              </a> */}
              <S.ExpConent>(미완)</S.ExpConent>
            </S.ExpBox>
          </S.ExpWrap>
        </S.Aboutme>
      </Width>
    </S.About>
  );
};

export default About;

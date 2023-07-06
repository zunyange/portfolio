import React, { useState, useEffect } from 'react';
import * as S from './AboutStyled.js';
import { Width } from '../../styles/common.js';
import { AstPath } from 'prettier';

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
          <S.EduWrap one>
            <S.EduTitle>Education</S.EduTitle>
            <S.EduBox>
              <S.Education>
                <span>실무 중심의 코딩 전문 교육기관</span>
                <div>2023.01~2023.04</div>
              </S.Education>
              <S.Conent title>Wecode</S.Conent>
              <S.Conent>
                • &nbsp;제품을 분석하고 제품의 가치를 파악하여 기능이 왜
                필요하고 고객 니즈에 적합한지 판단합니다.
              </S.Conent>
              <S.Conent>
                • &nbsp;개발 스크럼 문화를 도입한 팀 프로젝트를 통해
                커뮤니케이션하는 소프트 스킬을 훈련함.
              </S.Conent>
              <S.Conent>
                • &nbsp;코드를 학습하고 작업에 대한 깊은 이해하고 문서를
                작성하는 개발 블로깅 문화를 익히며 협업할 수 있습니다.
              </S.Conent>
              <S.Conent last>
                • &nbsp;기업 협업을 통해 다양한 규모의 실무 프로젝트에서 직접
                참여하여 제품을 실제로 사용하는 고객을 경험함.
              </S.Conent>
              {/* <S.Conent>잔디, 개발블로그 => 성장가능성 & 스터디</S.Conent> */}
              {/* <a
                href="https://dev.saedaron.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://dev.saedaron.com
              </a> */}
            </S.EduBox>
          </S.EduWrap>
          <S.EduWrap two>
            <S.EduTitle>&nbsp;</S.EduTitle>
            <S.EduBox>
              <S.Education>
                <span>개발자를 위한 스터디 그룹</span>
                <div>2023.05~</div>
              </S.Education>
              <S.Conent title>AfterWe</S.Conent>
              <S.Conent>
                • &nbsp;제품을 분석하고 제품의 가치를 파악하여 기능이 왜
                필요하고 고객 니즈에 적합한지 판단합니다.
              </S.Conent>
              <S.Conent>
                • &nbsp;개발 스크럼 문화를 도입한 팀 프로젝트를 통해
                커뮤니케이션하는 소프트 스킬을 훈련함.
              </S.Conent>
              <S.Conent>
                • &nbsp;코드를 학습하고 작업에 대한 깊은 이해하고 문서를
                작성하는 개발 블로깅 문화를 익히며 협업할 수 있습니다.
              </S.Conent>
              <S.Conent last>
                • &nbsp;기업 협업을 통해 다양한 규모의 실무 프로젝트에서 직접
                참여하여 제품을 실제로 사용하는 고객을 경험함.
              </S.Conent>
            </S.EduBox>
          </S.EduWrap>
        </S.Aboutme>
      </Width>
    </S.About>
  );
};

export default About;

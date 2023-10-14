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
                <img src="images/icon/phfirst.png" alt="phfirst" />
                &nbsp; 010-3186-3510
              </S.Number>
              <S.Mail>
                <a href="mailto:giveyoung530@gmail.com">
                  <img src="images/icon/mail.png" alt="num" />
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
          <S.EduWrap first="true">
            <S.EduTitle first="true">Education</S.EduTitle>
            <S.EduBox>
              <S.Education>
                <span>개발자를 위한 스터디 그룹</span>
                <div>2023.05 ~ </div>
              </S.Education>
              <S.Content title="true">AfterWe</S.Content>
              <S.Content>
                • &nbsp;FE 6명, BE 3명으로 구성되어 상호보완적으로 문제를
                접근하고 해결하는 능력을 함양하고 있습니다.
              </S.Content>
              <S.Content>
                • &nbsp;지식을 배우는 것이 목표가 아닌 배우는 방법을 학습하는
                과정을 연습합니다.
              </S.Content>
              <S.Content last="true">
                • &nbsp;스터디에서 얻은 지식 공유 및 토론으로 다시각 학습을 통한
                개발 스킬을 향상시키고 있습니다.
              </S.Content>
            </S.EduBox>
          </S.EduWrap>
          <S.EduWrap second="true">
            <S.EduTitle>&nbsp;</S.EduTitle>
            <S.EduBox>
              <S.Education>
                <span>실무 중심의 코딩 전문 교육기관</span>
                <div>2023.01 ~ 2023.05</div>
              </S.Education>
              <S.Content title="true">Wecode</S.Content>
              <S.Content>
                • &nbsp;개발 스크럼 문화를 도입한 팀 프로젝트를 통해
                커뮤니케이션하는 소프트 스킬을 훈련했습니다.
              </S.Content>
              <S.Content>
                • &nbsp;기업 협업을 통해 실무 프로젝트에 직접 참여하여 제품을
                실제로 사용하는 고객을 경험했습니다.
              </S.Content>
              <S.Content last="true">
                • &nbsp;제품을 분석하고 제품의 가치를 파악하여 기능이 왜
                필요하고 고객 니즈에 적합한지 판단할 수 있습니다.
              </S.Content>
            </S.EduBox>
          </S.EduWrap>
          <S.EduWrap third="true">
            <S.EduTitle>&nbsp;</S.EduTitle>
            <S.EduBox>
              <S.Education>
                <span>관광개발학 학사</span>
                <div>2019.03 ~ 2023.02</div>
              </S.Education>
              <S.Content title="true">경기대학교</S.Content>
              <S.Content>
                • &nbsp;고객 중심의 니즈를 파악하고 문제를 해결하면서 서비스의
                질을 높이기 위한 솔루션을 배웠습니다.
              </S.Content>
              <S.Content>
                • &nbsp;변화하는 산업에 탄력적으로 대처하고 다각적으로 탐구할 수
                있습니다.
              </S.Content>
              <S.Content>
                • &nbsp;소프트웨어 수업에서 프로그래밍 언어, 알고리즘, 데이터
                구조 및 문제 해결 기술의 기초를 학습했습니다.
              </S.Content>
              <S.Content>
                • &nbsp;R 프로그래밍 언어를 사용한 빅데이터 분석을 경험하여
                데이터 이해 및 분석 역량을 다소 갖추었습니다.
              </S.Content>
            </S.EduBox>
          </S.EduWrap>
        </S.Aboutme>
      </Width>
    </S.About>
  );
};

export default About;

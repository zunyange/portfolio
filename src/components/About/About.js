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
                &nbsp; 어디에서나 긍정적인 태도로! 끊임없이 도전하며 변화를
                즐기자!
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
                <span>개발자를 위한 스터디 그룹</span>
                <div>2023.05 ~ 현재</div>
              </S.Education>
              <S.Content title>AfterWe</S.Content>
              <S.Content>
                • &nbsp;Frontend 6명, Backend 3명으로 이루어진 스터디
                그룹입니다.
              </S.Content>
              <S.Content>
                • &nbsp;CS 지식, JavaScript, React 등 기술적 질문에 대해
                토론하며 학습하고 있습니다.
              </S.Content>
              <S.Content last>
                • &nbsp;TypeScript를 기반으로 한 사이드 프로젝트 진행 중입니다.
              </S.Content>
            </S.EduBox>
          </S.EduWrap>
          <S.EduWrap two>
            <S.EduTitle>&nbsp;</S.EduTitle>
            <S.EduBox>
              <S.Education>
                <span>실무 중심의 코딩 전문 교육기관</span>
                <div>2023.01 ~ 2023.04</div>
              </S.Education>
              <S.Content title>Wecode</S.Content>
              <S.Content>
                • &nbsp;개발 스크럼 문화를 도입한 팀 프로젝트를 통해
                커뮤니케이션하는 소프트 스킬을 훈련했습니다.
              </S.Content>
              <S.Content>
                • &nbsp;기업 협업을 통해 실무 프로젝트에서 직접 참여하여 제품을
                실제로 사용하는 고객을 경험했습니다.
              </S.Content>
              <S.Content last>
                • &nbsp;제품을 분석하고 제품의 가치를 파악하여 기능이 왜
                필요하고 고객 니즈에 적합한지 판단할 수 있습니다.
              </S.Content>
              {/* <a
                href="https://dev.saedaron.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://dev.saedaron.com
              </a> */}
            </S.EduBox>
          </S.EduWrap>
          <S.EduWrap three>
            <S.EduTitle>&nbsp;</S.EduTitle>
            <S.EduBox>
              <S.Education>
                <span>관광개발학 학사</span>
                <div>2019.03 ~ 2023.02</div>
              </S.Education>
              <S.Content title>경기대학교</S.Content>
              <S.Content>
                • &nbsp;고객 중심의 다양한 니즈를 파악하고 불편함을 해소시키는
                것부터 서비스의 질을 높여 그들에게 더 나은 환경을 제공하기 위한
                솔루션을 배웠습니다.
              </S.Content>
              <S.Content>
                • &nbsp;이를 통해 어떠한 아이디어를 직접 그려내고 구현해내며
                유저에게 빠르게 피드백을 받고 소통할 수 있다는 점에서 프론트엔드
                개발자로 결정하게 됐습니다.
              </S.Content>
              {/* <S.Content>
                • &nbsp;빅데이터 분석 및 디지털 융합역량을 겸비한 글로벌 관광
              </S.Content>
              <S.Content>
                • &nbsp;변화하는 산업에 탄력적으로 대처할 수 있으며, 다각적으로
                탐구할 수 있다.
              </S.Content> */}
              <S.Content>
                • &nbsp;소프트웨어 교양 수업에서 프로그래밍 언어, 알고리즘,
                데이터 구조 및 문제 해결 기술의 기초를 학습했습니다.
              </S.Content>
              {/* <S.Content>잔디, 개발블로그 => 성장가능성 & 스터디</S.Content> */}
              {/* <a
                href="https://dev.saedaron.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://dev.saedaron.com
              </a> */}
            </S.EduBox>
          </S.EduWrap>
          <S.PotentWrap>
            <S.PotentTitle>Potential</S.PotentTitle>
            <S.PotentBox>
              <S.Potent>성장 가능성</S.Potent>
              <S.CommitBox>
                <img src="images/jun/commit.png" alt="git-commit" />
                <div>
                  <div>
                    개발 공부 이후, 매일 조금씩이라도 코딩하고 꾸준히 커밋하는
                    습관을 기르고 있습니다. 이를 통해 코딩에 대한 자신감은 물론
                    성장하는 저의 모습을 보며 성취감을 느끼고 있으며, 지속적인
                    성장의 원동력인?{' '}
                    <a
                      href="https://velog.io/@zunyange"
                      target="_blank"
                      rel="noreferrer"
                    >
                      개발 블로그
                    </a>{' '}
                    또한 꾸준히 작성하고 있습니다.
                  </div>
                </div>
              </S.CommitBox>
            </S.PotentBox>
          </S.PotentWrap>
        </S.Aboutme>
      </Width>
    </S.About>
  );
};

export default About;

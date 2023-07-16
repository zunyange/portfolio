import React from 'react';
import * as S from './ProjectDetailStyled.js';
import { Width } from '../../styles/common.js';

const ProjectDetail = () => {
  return (
    <S.ProjectDetail>
      <Width>
        <S.DetailWrap>
          <S.Detail>
            <S.ProjectTitle>200OK</S.ProjectTitle>
            <S.ProjectSubTitle>
              <S.SubTitle>
                국내 대표 SPA 패션브랜드{' '}
                <a
                  href="https://www.spao.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  'SPAO'
                </a>{' '}
                클론 프로젝트
              </S.SubTitle>
              <S.Term>2023.03.03 ~ 03.17 (12일)</S.Term>
              <S.ProjectSkill>
                <span>React</span>
                <span>Sass</span>
                <span>Postman</span>
                <span>Trello</span>
                <span>Notion</span>
                <span>Slack</span>
              </S.ProjectSkill>
            </S.ProjectSubTitle>
            <S.ProjectImg>
              <img src="images/jun/200ok2.png" alt="Web first img" />
            </S.ProjectImg>
            <S.Description>
              Product 분석을 통해서 고객층에 맞는 화려한 시각적인 형태를
              제공하고, 개성을 중시하고 트렌디함을 쫓는 10대, 20대를 위한 추천
              및 맞춤 서비스와 다양한 이벤트를 진행하여 온라인 구매에 흥미를
              제공하는 것을 목적으로 기획했습니다.
            </S.Description>
            <S.ProjectImg>
              <img src="images/jun/200ok3.png" alt="Signup img" />
            </S.ProjectImg>
          </S.Detail>
        </S.DetailWrap>
      </Width>
    </S.ProjectDetail>
  );
};

export default ProjectDetail;

// <S.Title>
// 개성을 중시하는 1020을 위한 트렌디하고 합리적인 가격대의 의류 서비스
// </S.Title>
// <video alt="signup" controls>
// <source
//   src="https://github.com/wecode-bootcamp-korea/43-1st-200ok-frontend/assets/114667764/78d72fb3-c72d-4f6d-97f6-3af679b6db1e"
//   type="video/mp4"
// />
// </video>

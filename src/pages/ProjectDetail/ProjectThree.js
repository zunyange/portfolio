import React from 'react';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const ProjectThree = () => {
  return (
    <S.ProjectDetail style={{ backgroundColor: '#97bbeb' }}>
      <Width>
        <S.DetailWrap>
          <S.Detail>
            <S.ProjectTitle>Saedaron</S.ProjectTitle>
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
              <S.Term>
                구현 항목 : 회원가입, 장바구니 &nbsp;|&nbsp; 2023.03.03 ~ 03.17
                (12일)
              </S.Term>
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
              <img src="/images/jun/200okmain.png" alt="Web first img" />
            </S.ProjectImg>
            <S.Description>
              Product 분석을 통해 고객층에 맞는 화려한 시각적인 형태를 제공하고,
              개성을 중시하고 트렌디함을 쫓는 10대, 20대를 위한 추천 및 맞춤
              서비스와 다양한 이벤트를 진행하여 온라인 구매에 흥미를 제공하는
              것을 목적으로 기획했습니다.
            </S.Description>
            <S.ProjectImg>
              <img src="/images/jun/200oksignup.png" alt="Signup img" />
            </S.ProjectImg>
            <S.Description>
              • 회원가입 페이지 •<br />
              <div>
                - 정규표현식을 활용한 유효성 검사, 필수입력 여부에 의한 실시간
                레이아웃의 변화로 사용자의 편의를 위해 UI 구성
              </div>
              <div>
                - 이메일 중복확인으로 사용자의 토큰이 백엔드 데이터에
                저장돼있는지 확인하는 과정 구현
              </div>
              <div>
                - 필수 사항 오류 및 미입력시 버튼을 가시적으로 비활성화{' '}
              </div>
              - checkbox를 통해 사용자의 선택을 관리하여 데이터화하고, 서버에
              이동
            </S.Description>
            <S.ProjectImg>
              <img src="/images/jun/200okcart.png" alt="Cart img" />
            </S.ProjectImg>
            <S.Description>
              • 장바구니 페이지 •<br />
              <div>
                - 사용자에 따라 장바구니의 상품이 유지되도록 Local Storage에
                토큰을 저장하는 방식 적용
              </div>
              <div>
                - 체크박스 : 선택 제품에 의해 수량변경, 삭제가 가능하며 선택한
                제품의 총금액을 보여줌
              </div>
              <div>
                - 사용자의 편의를 위해 개별삭제, 선택삭제 전체삭제가 가능하도록
                구현
              </div>
              <div>
                - 삭제 버튼 클릭 시 서버 및 클라이언트에서 해당 데이터 삭제
              </div>
              - 최종 버튼은 쇼핑하기와 결제하기로 구분하여 해당 페이지에서
              결제를 보류할 수 있도록 편의화
            </S.Description>
          </S.Detail>
        </S.DetailWrap>
      </Width>
    </S.ProjectDetail>
  );
};

export default ProjectThree;

// <S.Title>
// 개성을 중시하는 1020을 위한 트렌디하고 합리적인 가격대의 의류 서비스
// </S.Title>
// <video alt="signup" controls>
// <source
//   src="https://github.com/wecode-bootcamp-korea/43-1st-200ok-frontend/assets/114667764/78d72fb3-c72d-4f6d-97f6-3af679b6db1e"
//   type="video/mp4"
// />
// </video>

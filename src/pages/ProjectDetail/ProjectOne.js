import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ProjectDetailStyled.js';
import { Width } from '../../styles/common.js';

const ProjectOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMov, setIsOpenMov] = useState(false);

  const goToHome = () => {
    navigate('/');
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenMov = () => {
    setIsOpenMov(!isOpenMov);
  };
  //Scroll 위치 기억
  const location = useLocation();
  const { scrollPosition } = location.state || { scrollPosition: 0 };
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <S.ProjectDetail>
      <Width>
        <S.DetailWrap>
          <S.Detail>
            <S.HomeBtn onClick={goToHome}>
              <img src="/images/icon/home.png" alt="HomeBtn" />
            </S.HomeBtn>
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
              <S.Term>
                구현 항목 : 회원가입 & 장바구니 페이지 &nbsp;|&nbsp; 2023.03.03
                ~ 03.17 (12일)
              </S.Term>
              <S.ProjectSkill>
                <span>React</span>
                <span>Sass</span>
                <span>Postman</span>
                <span>AWS</span>
                <span>Trello</span>
                <span>Notion</span>
                <span>Slack</span>
              </S.ProjectSkill>
            </S.ProjectSubTitle>
            <S.ProjectImg>
              <img src="/images/project/200okMain.png" alt="Main-img" />
            </S.ProjectImg>
            <S.Description>
              Product 분석을 통해 고객층에 맞는 화려한 시각적인 형태를 제공하고,
              개성을 중시하고 트렌디함을 쫓는 10대, 20대를 위한 추천 및 맞춤
              서비스와 다양한 이벤트를 진행하여 온라인 구매에 흥미를 제공하는
              것을 목적으로 기획했습니다.
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/200oksignup.png" alt="Signup img" />
            </S.ProjectImg>
            <S.Description>
              <span>회원가입 페이지</span> <br />- 고객층에 맞춘 회원가입을 위해
              기혼여부와 같은 불필요한 추가 정보는 제외하는 등 회원가입 과정을
              간소화
              <div>
                - 사용자가 본인이 입력한 값이 양식에 맞는지 회원가입 버튼을
                누르기 전에 시각적으로 확인 가능
              </div>
              <div>
                - 정규표현식을 활용한 유효성 검사, 필수입력 여부에 의한 실시간
                레이아웃의 변화로 사용자의 편의를 위한 UI 구성
              </div>
              <div>
                - 이메일 중복을 확인함으로써 사용자의 토큰이 백엔드 데이터에
                저장돼있는지 확인
              </div>
              - checkbox를 통해 사용자의 선택을 관리하여 데이터화하고, 서버에
              이동
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/200okcart.png" alt="Cart img" />
            </S.ProjectImg>
            <S.Description>
              <span>장바구니 페이지</span> <br />- 상세 페이지에서 담은 제품의
              색상, 사이즈, 수량의 정보를 카트에서도 한 눈에 볼 수 있게 시각화
              <div>
                - 사용자에 따라 장바구니의 상품이 유지되도록 Local Storage에
                토큰을 저장하는 방식 적용
              </div>
              <div>
                - Checkbox를 통해 선택 제품에 의해 수량 변경 및 삭제가 가능하며
                선택한 제품의 총금액을 보여줌
              </div>
              <div>
                - 사용자의 편의를 위해 개별삭제, 선택삭제, 전체삭제가 모두
                가능하도록 구현
              </div>
              - 최종 버튼은 쇼핑하기와 결제하기로 구분하여 해당 페이지에서
              결제를 보류할 수 있도록 편의화
              <S.ShowCode onClick={handleOpen}>
                {isOpen ? (
                  <>🔻 Close me</>
                ) : (
                  <>🔺 체크박스 구현 과정 보고 싶다면? Click me!</>
                )}
              </S.ShowCode>
              {isOpen && (
                <S.CodeWrap>
                  1. 회원가입의 ‘약관동의’ 에서{' '}
                  <c>&nbsp;new Array(숫자).fill </c> 문법을 사용하여 체크박스
                  기능을 구현했었다. *체크박스는 2개뿐
                  <img src="/images/code/Check1.png" alt="checkbox-code" />
                  2. 따라서, 장바구니에서도 체크박스 기능이 필요하였기에
                  재사용할 수 있다고 판단했다.
                  <p>
                    3. 각 체크박스의 선택 상태를 <c>&nbsp;checkedState </c>{' '}
                    배열에 저장하고, <c>&nbsp;toggleSelected </c> 함수를
                    호출하여 개별 체크박스의 선택 상태를 변경할 수 있다.
                  </p>
                  <img src="/images/code/Check2.png" alt="checkbox-code" />
                  4. 1. 하지만, 장바구니에 담긴 상품에 따라 체크박스 개수가 계속
                  바뀌기도 하고 다른 기능을 위한 useState가 존재하였기에 그
                  useState를 활용하자는 피드백이 있었다.{' '}
                  <p>
                    5.
                    <c>
                      &nbsp;const [productList, setProductList] = useState([]);{' '}
                    </c>
                    에 map을 사용해서 들어오는 장바구니 리스트에 따라
                    <br />
                    <c>&nbsp;checkedState: !product.checkedState </c>를
                    넣어주기로 했다.
                  </p>
                  <img src="/images/code/Check3.png" alt="checkbox-code" />
                  6. 체크박스의 <c>&nbsp;name </c> 속성을 이용하여 장바구니의
                  들어온 상품마다 name이 다르기 때문에 해당 상품을 찾아 선택
                  상태를 변경하는 코드를 구현했다.
                </S.CodeWrap>
              )}
            </S.Description>
            <S.ShowVideo onClick={handleOpenMov}>
              {isOpenMov ? <>2배속입니다. </> : <>〈 담당 기능 구현 영상 〉</>}
            </S.ShowVideo>
            {isOpenMov && (
              <S.VideoWrap>
                <video alt="full-function" controls>
                  <source src="/images/jun/200ok_final.mov" type="video/mp4" />
                </video>
              </S.VideoWrap>
            )}
            <S.Fruits>
              <span>성과</span>
              <div>- 실제 웹서비스와 흡사한 형태의 기능 및 레이아웃 구성</div>
              <div>
                - 코드 스플리팅, 성능 효율화 및 UX 개선을 통해 사용자 친화적인
                웹 구현 경험
              </div>
            </S.Fruits>
            <S.Leanred>
              <span>배운 점</span>
              <div>
                - 1주 내로 리액트를 빠르게 학습하여 즉각적으로 프로젝트에 적용
              </div>
              <div>
                - 프론트엔드, 백엔드 개발자 5명이 기획 및 디자인을 구성하고
                변경사항을 실시간으로 전달 ∙ 적용하며 집중적으로 소통하는 소프트
                스킬 습득
              </div>
              <div>- AWS S3 저장소에 프론트엔드 웹 페이지 배포</div>
            </S.Leanred>
            <S.Description link>
              <a
                href="https://bit.ly/3XLT7Vq"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  color: '#e0a4a4',
                }}
              >
                🔗 프로젝트에 대한 회고가 블로그에 담겨있습니다.
              </a>
              <S.CloseBtn onClick={() => navigate(-2)}>
                <img src="/images/icon/close.png" alt="CloseBtn" />
                CLOSE
              </S.CloseBtn>
            </S.Description>
          </S.Detail>
        </S.DetailWrap>
      </Width>
    </S.ProjectDetail>
  );
};

export default ProjectOne;

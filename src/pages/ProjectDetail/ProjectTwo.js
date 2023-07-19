import React, { useState, useRef, useEffect } from 'react';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const ProjectTwo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();
  const observerRef = useRef(null); // Use useRef to store the observer

  // IntersectionObserver callback function
  const handleIntersection = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      observerRef.current.disconnect(); // Disconnect the observer once the image is visible
    }
  };

  useEffect(() => {
    // Create an IntersectionObserver instance
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Define the threshold at which the callback should be triggered
    });

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current); // Start observing the image element
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect(); // Clean up the observer on component unmount
      }
    };
  }, []);

  return (
    <S.ProjectDetail style={{ backgroundColor: '#b9b9b9' }}>
      <Width>
        <S.DetailWrap>
          <S.Detail>
            <S.ProjectTitle>Maehwa</S.ProjectTitle>
            <S.ProjectSubTitle>
              <S.SubTitle>나에게 맞는 화장실을 찾는 서비스</S.SubTitle>
              <S.Term>
                구현 항목 : 장소 리스트, 리뷰 페이지 &nbsp;|&nbsp; 2023.03.24 ~
                04.06 (2주)
              </S.Term>
              <S.ProjectSkill>
                <span>React</span>
                <span>Styled-components</span>
                <span>Recoil</span>
                <span>Ant Design</span>
                <span>Jira</span>
                <span>Figma</span>
              </S.ProjectSkill>
            </S.ProjectSubTitle>
            <div ref={imgRef}>
              {isVisible ? (
                <S.ProjectImg>
                  <img src="/images/jun/200okmain.png" alt="Web first img" />
                </S.ProjectImg>
              ) : (
                <S.ProjectImg>
                  <div
                    style={{
                      width: '800px',
                      height: '500px',
                      backgroundColor: '#eeeeee',
                    }}
                  >
                    Loading...
                  </div>
                </S.ProjectImg>
              )}
            </div>
            <S.Description>
              '매화를 찾아서' 실생활에서의 불편함에 착안하여 지도로 내 주변
              화장실을 발견하고, 실사용자들이 제공한 리뷰와 필터링을 통해 나에게
              맞는 화장실을 찾을 수 있는 프리미엄 서비스입니다.
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

export default ProjectTwo;

// <S.Title>
// 개성을 중시하는 1020을 위한 트렌디하고 합리적인 가격대의 의류 서비스
// </S.Title>
// <video alt="signup" controls>
// <source
//   src="https://github.com/wecode-bootcamp-korea/43-1st-200ok-frontend/assets/114667764/78d72fb3-c72d-4f6d-97f6-3af679b6db1e"
//   type="video/mp4"
// />
// </video>

import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ProjectDetailStyled.js';
import { Width } from '../../styles/common.js';

const ProjectThree = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const imgRef = useRef();
  const observerRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  //Scroll 위치 기억
  const location = useLocation();
  const { scrollPosition } = location.state || { scrollPosition: 0 };
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <S.ProjectDetail style={{ backgroundColor: '#97bbeb' }}>
      <Width>
        <S.DetailWrap>
          <S.Detail>
            <S.CloseBtn onClick={() => navigate(-2)}>
              <img src="/images/icon/close.png" alt="CloseBtn" />
              CLOSE
            </S.CloseBtn>
            <S.ProjectTitle>Saedaron</S.ProjectTitle>
            <S.ProjectSubTitle>
              <S.SubTitle>새다론 정보 서비스 구축 프로젝트</S.SubTitle>
              <S.Term>
                구현 항목 : 반응형 UI 구현, 위치 기반 정보 매칭 서비스 모듈
                개발&nbsp;|&nbsp; 2023.04.10 ~ 05.04 (24일)
              </S.Term>
              <S.ProjectSkill>
                <span>React</span>
                <span>Styled-components</span>
                <span>Next.js</span>
                <span>axios</span>
                <span>Figma</span>
                <span>Notion</span>
              </S.ProjectSkill>
            </S.ProjectSubTitle>
            <div ref={imgRef}>
              {isVisible ? (
                <S.ProjectImg>
                  <img src="/images/project/DabisuMain.png" alt="Main-img" />
                </S.ProjectImg>
              ) : (
                <S.ProjectImg>
                  <div
                    style={{
                      width: '800px',
                      height: '310px',
                      backgroundColor: '#97bbeb',
                    }}
                  >
                    Loading...
                  </div>
                </S.ProjectImg>
              )}
            </div>
            <S.Description>
              개발 부서의 모든 팀원과 지속적으로 소통 및 협업을 하였고, 현업
              개발자분들의 코드 리뷰를 통한 지속적인 코드를 개선하여 제품
              완성도와 품질을 높혔습니다. 또한, 현재 기업은 코드를 이어받아
              제품의 연속성을 유지 및 향상시켜 사이트를 배포하였습니다.
            </S.Description>
            <S.Description point>
              <div>
                <span>Point 1. </span>유사한 서비스와 관련된 자료를 분석하고
                장단점을 분류하여 디자인팀 없이 팀원분들과 디자인 및 기획을
                진행했습니다. 그 후 디자인 시안을 제공받아 UI를 도맡아
                진행하였고, Figma 및 Adobe 기술을 익히기도 했습니다.
              </div>
              <div>
                <span>Point 2. </span>
              </div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/Dabisu2.png" alt="Responsive-img" />
            </S.ProjectImg>
            <S.Description>
              <span>반응형</span> <br />- 콘텐츠 목적에 맞춰 동적인 움직임으로
              사용자에게 시각적인 흥미를 제공하기 위한 최소한의 디자인
              라이브러리만 사용하였습니다.
              <div>
                - 사용자 입장에서 사이트의 진행 플로우가 부드럽게 느껴지도록
                최대한 라이브러리를 설치하지 않는데에 중점을 두었고,
              </div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/DabisuMap.png" alt="Map-img" />
            </S.ProjectImg>
            <S.ClickMore onClick={handleOpen}>
              {isOpen ? (
                <>
                  <img src="/images/icon/arrow.png" alt="arrow" />
                  Close me!
                </>
              ) : (
                <>
                  <img src="/images/icon/arrow.png" alt="arrow" /> 영상으로
                  확인해보고 싶다면? Click me!
                </>
              )}
            </S.ClickMore>
            {isOpen && (
              <S.VideoWrap>
                <video alt="signup" controls>
                  <source
                    src="https://github.com/zunyange/TIL/assets/114667764/da860e66-2fe3-4cd3-8503-2c10de65ca0e"
                    type="video/mp4"
                  />
                </video>
              </S.VideoWrap>
            )}
            <S.Description>
              <span>네이버 맵 API 를 활용한 위치기반 서비스</span>
              <br />- Cluster 라이브러리를 설치하지 않고
              <div>
                - 카테고리/키워드/페이지별 API 를 받아 페이지네이션 구현
              </div>
            </S.Description>

            <S.Description>
              <a
                href="https://dev.saedaron.com/"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  color: '#6595d6',
                }}
              >
                🔗 실제 서비스가 운영중입니다.
              </a>
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

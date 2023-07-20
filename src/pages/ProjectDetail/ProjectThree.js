import React, { useState, useRef, useEffect } from 'react';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const ProjectThree = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();
  const observerRef = useRef(null);

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

  return (
    <S.ProjectDetail style={{ backgroundColor: '#97bbeb' }}>
      <Width>
        <S.DetailWrap>
          <S.Detail>
            <S.ProjectTitle>Saedaron</S.ProjectTitle>
            <S.ProjectSubTitle>
              <S.SubTitle>새다론 정보 서비스 구축 프로젝트</S.SubTitle>
              <S.Term>
                구현 항목 : 반응형 UI &nbsp;|&nbsp; 2023.04.10 ~ 05.04 (24일)
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
            <div ref={imgRef}>
              {isVisible ? (
                <S.ProjectImg>
                  <img src="/images/jun/DabisuMain.png" alt="Main-img" />
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
            <S.Description>(설명)</S.Description>
            <S.ProjectImg>
              <img src="/images/jun/Dabisu2.png" alt="Responsive-img" />
            </S.ProjectImg>
            <S.Description>
              <span>반응형</span> <br />- (설명)
              <div>- (설명)</div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/jun/DabisuMap.png" alt="Map-img" />
            </S.ProjectImg>
            <S.Description>
              <span>반응형</span> <br />- (설명)
              <div>- (설명)</div>
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

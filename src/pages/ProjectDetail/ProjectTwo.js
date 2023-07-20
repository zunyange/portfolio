import React, { useState, useRef, useEffect } from 'react';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const ProjectTwo = () => {
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
    <S.ProjectDetail style={{ backgroundColor: '#cdcdcd' }}>
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
                  <img src="/images/jun/MaehwaMain.png" alt="Main-img" />
                </S.ProjectImg>
              ) : (
                <S.ProjectImg>
                  <div
                    style={{
                      width: '700px',
                      height: '370px',
                      backgroundColor: '#eeeeee',
                    }}
                  >
                    Loading...
                  </div>
                </S.ProjectImg>
              )}
            </div>
            <S.Description>
              '매화를 찾아서'는 실생활에서의 불편함에 착안하여 지도로 내 주변
              화장실을 발견하고, 실사용자들이 제공한 리뷰와 필터링을 통해 나에게
              더 맞는 장소를 찾을 수 있는 서비스입니다. 화장실을 찾는 유저
              특성상 이동하면서 서비스를 이용할 것임을 감안하여 모바일
              레이아웃으로 구성했습니다.
            </S.Description>
            <S.ProjectImg>
              <img src="/images/jun/MaehwaFilter.png" alt="Filter-img" />
            </S.ProjectImg>
            <S.Description>
              <span>장소리스트(PlaceList)</span> <br />- useSearchParams Hook을
              사용하여 해당 queryParameter 의 value를 불러오고, queryString을
              통한 상품 필터 기능 구현
              <div>
                - 사용자의 궁금증을 불러일으키기 위해 모든 데이터를 가시화하지
                않았고, 사용자의 편의성과 집중도를 높이기 위해 모달창을 사용하여
                정보를 빠르게 제공
              </div>
              <div>- (미완)</div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/jun/MaehwaReview.png" alt="Review-img" />
            </S.ProjectImg>
            <S.Description>
              <span>리뷰 페이지</span> <br />- 데이터 재사용 및 모든 id 의 함수
              작동 방지를 위해 컴포넌트 분리 : Tag / Comment Component
              <div>
                - 별점 라이브러리 사용 : onChange 이벤트로 값이 정해지면
                콜백함수를 일으킴
              </div>
              <div>
                - 선택한 태그의 값을 전달하기 위해 태그 별 id 를 할당하고,
                onClick 함수에서 선택된 id들의 정보를 새 배열에 업데이트하여
                관리
              </div>
              <div>- (미완)</div>
            </S.Description>
            <S.Description>
              <a
                href="https://bit.ly/44B5uqh"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  color: '#a4a4a4',
                }}
              >
                🔗 프로젝트에 대한 회고가 블로그에 담겨있습니다.
              </a>
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

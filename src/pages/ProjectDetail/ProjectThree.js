import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ProjectDetailStyled.js';
import { Width } from '../../styles/common.js';

const ProjectThree = () => {
  const [isOpen, setIsOpen] = useState(false);

  const goToHome = () => {
    navigate('/');
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
            <S.HomeBtn onClick={goToHome}>
              <img src="/images/icon/home.png" alt="HomeBtn" />
            </S.HomeBtn>
            <S.ProjectTitle>Saedaron</S.ProjectTitle>
            <S.ProjectSubTitle>
              <S.SubTitle>새다론 정보 서비스 구축 프로젝트</S.SubTitle>
              <S.Term>
                구현 항목 : 반응형 UI 구현 & 위치 기반 정보 매칭 서비스 모듈
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
            <S.ProjectImg>
              <img src="/images/project/DabisuMain.png" alt="Main-img" />
            </S.ProjectImg>
            <S.Description>
              개발 부서의 모든 팀원과 지속적으로 소통 및 협업을 하였고, 현업
              개발자분들의 코드 리뷰를 통한 지속적인 코드를 개선하여 제품
              완성도와 품질을 높혔습니다. MVP 형태의 프로토타입을 구현하여 현재
              기업은 코드를 이어받아 제품의 연속성을 유지 및 향상시켜 사이트를
              배포하였습니다.
            </S.Description>
            <S.Description point>
              <div>
                <span>Point 1. </span>유사한 서비스와 관련된 <b>자료를 분석</b>
                하고 장단점을 분류하여 디자인팀 없이 팀원분들과 디자인 및 기획을
                진행하였고, 그 후 디자인 시안을 제공받아 UI를 도맡아
                구현하였습니다.
              </div>
              <div>
                <span>Point 2. </span>사용자 입장에서 사이트의 진행{' '}
                <b>플로우가 부드럽게</b> 느껴지도록 최소한의 라이브러리를
                사용하는데 중점을 두었습니다.
              </div>
              <div>
                <span>Point 3. </span>
                <b>백엔드와의 데이터 요청과 응답</b>을 통해 원하는 데이터를
                보내고 받아보면서 통신을 위해 실행되는 함수들의 구조를
                변경해가며 처리하는 방법을 학습했습니다.
              </div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/Dabisu2.png" alt="Responsive-img" />
            </S.ProjectImg>
            <S.Description>
              <span>반응형 UI 구현</span> <br /> - 웹사이트의 활력을 불어넣고
              상호작용을 이끌어내기 위해 react-reveal 라이브러리를 사용하여
              스크롤 애니메이션 구현
              <div>
                - 아동 콘텐츠에 맞춰 동적인 움직임으로 사용자에게 시각적인
                흥미를 제공하기 위해 CSS Animation 사용
              </div>
              <div>
                - 브레이크 포인트 구간 내에 적용되는 콘텐츠 영역을 정리하며 웹
                버전의 UI 시안을 기반으로 반응형 디자인을 직접 구상
              </div>
              <div>
                - useRef를 사용하여 값의 변경을 감지하거나 DOM 요소에 접근하는
                등의 여러 스크롤 이벤트 처리
              </div>
              <div>
                - 네트워크 요청을 위해 axios로 파일 다운로드 기능 : 좀 더 많은
                브라우저에 지원이 되고 보안성이 높으며 확장성을 염두하여 fetch
                대신 axios를 사용
              </div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/DabisuMap.png" alt="Map-img" />
            </S.ProjectImg>
            <S.ClickMore onClick={handleOpen}>
              {isOpen ? (
                <>🔺 Close me!</>
              ) : (
                <>🔻 영상으로 확인해보고 싶다면? Click me!</>
              )}
            </S.ClickMore>
            {isOpen && (
              <S.VideoWrap>
                <video alt="map function" controls>
                  <source src="/images/jun/map.mov" type="video/mp4" />
                </video>
              </S.VideoWrap>
            )}
            <S.Description>
              <span>네이버 맵 API 를 활용한 위치기반 서비스</span>
              <br />- 사용자의 현재 위치를 받아와 지도 중심을 설정하고, 지역
              또는 가맹점 검색시 첫번째 데이터의 좌표를 중심으로 지도 이동
              <div>
                - 카테고리/키워드/페이지 별 API 를 받아 해당 버튼 클릭에 따라
                data를 호출하여 페이지네이션 구현
              </div>
              <div>
                - NAVER Maps JavaScript API 를 사용하여 마커 클러스터링 구현 :
                마커 클러스터링은 여러 개의 마커를 하나의 클러스터로 표현하는
                것으로, 지사의 총 갯수를 고려하여 간격 · 크기 · 마커 수 등을
                개별적으로 정의함
              </div>
            </S.Description>
            <S.Description link>
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
              <S.CloseBtn2 onClick={() => navigate(-2)}>
                <img src="/images/icon/close.png" alt="CloseBtn" />
                CLOSE
              </S.CloseBtn2>
            </S.Description>
          </S.Detail>
        </S.DetailWrap>
      </Width>
    </S.ProjectDetail>
  );
};

export default ProjectThree;

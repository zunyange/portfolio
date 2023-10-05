import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ProjectDetailStyled.js';
import { Width } from '../../styles/common.js';

const ProjectTwo = () => {
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
    <S.ProjectDetail style={{ backgroundColor: '#cdcdcd' }}>
      <Width>
        <S.DetailWrap>
          <S.Detail>
            <S.HomeBtn onClick={goToHome}>
              <img src="/images/icon/home.png" alt="HomeBtn" />
            </S.HomeBtn>
            <S.ProjectTitle>Maehwa</S.ProjectTitle>
            <S.ProjectSubTitle>
              <S.SubTitle>나에게 맞는 화장실을 찾는 서비스</S.SubTitle>
              <S.Term>
                구현 항목 : 필터링 & 리뷰 페이지 &nbsp;|&nbsp; 2023.03.24 ~
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
            <S.ProjectImg>
              <img src="/images/project/MaehwaMain.png" alt="Main-img" />
            </S.ProjectImg>
            <S.Description>
              '매화를 찾아서'는 실생활에서의 불편함에 착안하여 지도로 내 주변
              화장실을 발견하고, 실사용자들이 제공한 리뷰와 필터링을 통해 나에게
              더 맞는 장소를 찾을 수 있는 서비스입니다. 화장실을 찾는 유저
              특성상 이동하면서 서비스를 이용할 것임을 감안하여 모바일
              레이아웃으로 구성했습니다.
            </S.Description>
            <S.Description point>
              <div>
                <span>Point 1. </span>역방향으로 상태를 전달하고 업데이트하기
                위해 전역 상태관리 라이브러리인 <strong>Recoil</strong>을
                사용하였고, 상호의존성을 가진 특성으로 데이터의 흐름에 따라서
                여러 상태들의 연관된 컴포넌트들을 유기적으로 관리할 수
                있었습니다.
              </div>
              <S.ShowCode onClick={handleOpen}>
                {isOpen ? (
                  <>🔻 Close me</>
                ) : (
                  <>🔺 Recoil 구현 과정 보고 싶다면? Click me!</>
                )}
              </S.ShowCode>
              {isOpen && (
                <S.CodeWrap>
                  1. 우리 서비스의 기획상 모달 및 페이지 이동이 많아{' '}
                  <c>&nbsp;Recoil </c>을 사용하였다. Redux는 Recoil에 비해
                  상대적으로 코드를 작성하는 양이 많고 단기간 내에 완성해야
                  했기에 작은 버그들을 감수해서라도 Recoil을 선택했다.
                  <img src="/images/code/Recoil1.png" alt="Recoil-code" />
                  2. <c>&nbsp;초기값 설정 </c> : Atom.js 파일을 생성해서 recoil
                  설치 후, atom을 import 해주고 key 값은 useState에서의 현재
                  상태값 변수를, default 값에는 초기값을 넣어주면 된다.
                  <img src="/images/code/Recoil2.png" alt="Recoil-code" />
                  3. <c>&nbsp;RecoilRoot </c> : Recoil 상태를 사용하는
                  컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot 가 필요하다.
                  루트 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소다.
                  <img src="/images/code/Recoil3.png" alt="Recoil-code" />
                  4. <c>&nbsp;Recoil 적용 </c> : 컴포넌트가 atom을 읽고 쓰게
                  하기 위해서
                  <c>&nbsp;useRecoilState() </c>를 아래와 같이 사용했다.
                  <br />
                  useRecoilState의 기능을 반으로 분리할 수도 있다.
                  useRecoilValue 은 Recoil 상태의 값을 반환하고,
                  useSetRecoilState은 Recoil 상태의 값을 업데이트하기 위한
                  setter 함수를 반환하여 아래 코드 예시와 같이, 상황에 따라
                  필요한 hook 을 사용하면 된다.
                  <img src="/images/code/Recoil4.png" alt="Recoil-code" />
                </S.CodeWrap>
              )}
              <div>
                <span>Point 2. </span>
                <strong>디자인 라이브러리</strong>를 사용하여 다양한 디자인
                옵션을 탐색하고 사용자 인터페이스를 다양하게 구성할 수 있었고,
                새로운 시각과 기술적 지식을 습득하여 보다 효율적이고 일관된
                디자인을 구현했습니다.
              </div>
              <div>
                <span>Point 3. </span>단기간에 새로운 프로덕트를 기획하고 새로운
                툴, 디자인, 기술들을 도입하며 <strong>러닝커브</strong>를
                겪었지만, 잘 극복하여 더욱 성장할 수 있었던 프로젝트입니다.
              </div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/MaehwaFilter.png" alt="Filter-img" />
            </S.ProjectImg>
            <S.Description>
              <span>필터링</span> <br />- useSearchParams Hook을 사용하여 해당
              query parameter 의 value를 불러오고, queryString을 통한 필터 기능
              구현 : 사용자가 태그를 선택하거나 해제할 때 query parameter를
              조작하여 선택한 태그를 URL에 반영하고 시각적으로 표시하는 데 사용
              <div>
                - 선택한 태그를 추적하고 필터링하는 데 선택한 태그의 속성을
                반전시키고, 선택된 태그 목록을 업데이트하여 전달
              </div>
              <div>
                - 사용자의 궁금증을 불러일으키기 위해 모든 데이터를 가시화하지
                않고, 편의성과 집중도를 높이기 위해 모달창을 사용하여 정보를
                더욱 빠르게 제공
              </div>
            </S.Description>
            <S.ProjectImg>
              <img src="/images/project/MaehwaReview.png" alt="Review-img" />
            </S.ProjectImg>
            <S.Description>
              <span>리뷰 페이지</span> <br />- 데이터 재사용 및 모든 댓글 id 의
              함수 작동 방지를 위해 여러 컴포넌트로 분리
              <div>
                - 별점 라이브러리 사용 : onChange 이벤트로 값을 받고, 선택되면
                콜백함수를 일으킴
              </div>
              <div>
                - 컴포넌트로 분리된 리뷰 데이터는 useState를 사용하여 상태
                변수에 저장하고 사용자가 리뷰를 제출하면 콜백 함수를 트리거하여
                한번에 전달
              </div>
              <div>
                - 백엔드 API와 연동하지 않고도 컴포넌트들로 이루어진 페이지 to
                페이지 리뷰작성이 가능하도록 하드코딩 경험
              </div>
            </S.Description>
            <S.Description link>
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

export default ProjectTwo;

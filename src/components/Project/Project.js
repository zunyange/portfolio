import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const Project = ({ project }) => {
  const navigate = useNavigate();

  const goToDabisu = () => {
    navigate('/project/dabisu');
  };

  const goToMaehwa = () => {
    navigate('/project/maehwa');
  };

  const goTo200ok = () => {
    navigate('/project/200ok');
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Project ref={project}>
      <Width>
        <S.ProjectWrap>
          <S.Title>Project</S.Title>
          <S.Projects>
            <Link
              to={{
                pathname: '/project/dabisu',
                state: { scrollPosition },
              }}
              style={{ textDecoration: 'none', color: '#000000' }}
            >
              <S.ProjectBox onClick={goToDabisu}>
                <S.ProjectImg>
                  <img src="/images/project/Dabisu.png" alt="project-img" />
                  <span className="overlay" />
                  <S.ShowProject>
                    <div onClick={goToDabisu}>
                      <img src="images/icon/more.png" alt="more" />
                    </div>
                    <a
                      href="https://dev.saedaron.com/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={event => event.stopPropagation()}
                    >
                      <img src="images/icon/page.png" alt="showWeb" />
                    </a>
                  </S.ShowProject>
                </S.ProjectImg>
                <S.ProjectDescription>
                  <S.ProjectLanguage>React Js</S.ProjectLanguage>
                  <S.ProjectContent>
                    <h4>새다론 정보 서비스 구축 프로젝트</h4>
                    <div>
                      홍보 목적의 원페이지 반응형 UI 구현 및 위치 기반 정보 매칭
                      서비스 모듈 개발
                    </div>
                    <div>
                      <a
                        href="https://dev.saedaron.com/"
                        target="_blank"
                        rel="noreferrer"
                        onClick={event => event.stopPropagation()}
                      >
                        🚀 실제 서비스 운영중 🚀
                      </a>
                    </div>
                  </S.ProjectContent>
                </S.ProjectDescription>
              </S.ProjectBox>
            </Link>
            <Link
              to={{
                pathname: '/project/maehwa',
                state: { scrollPosition },
              }}
              style={{ textDecoration: 'none', color: '#000000' }}
            >
              <S.ProjectBox onClick={goToMaehwa}>
                <S.ProjectImg>
                  <img src="/images/project/Maehwa.png" alt="project-img" />
                  <span className="overlay" />
                  <S.ShowProject>
                    <div onClick={goToMaehwa}>
                      <img src="images/icon/more.png" alt="more" />
                    </div>
                    <a
                      href="https://github.com/zunyange/finding-maehwa-frontend"
                      target="_blank"
                      rel="noreferrer"
                      onClick={event => event.stopPropagation()}
                    >
                      <img src="images/icon/github.png" alt="github" />
                    </a>
                  </S.ShowProject>
                </S.ProjectImg>
                <S.ProjectDescription>
                  <S.ProjectLanguage>React Js</S.ProjectLanguage>
                  <S.ProjectContent>
                    <h4>프리미엄 맞춤 화장실 서비스</h4>
                    <div>
                      실생활에서의 불편함에 착안하여 지도로 내 주변 화장실을
                      발견하고 필터링이나 리뷰를 통해 나에게 맞는 화장실을 찾는
                      모바일 기반의 웹 서비스
                    </div>
                  </S.ProjectContent>
                </S.ProjectDescription>
              </S.ProjectBox>
            </Link>
            <Link
              to={{
                pathname: '/project/200ok',
                state: { scrollPosition },
              }}
              style={{ textDecoration: 'none', color: '#000000' }}
            >
              <S.ProjectBox onClick={goTo200ok} last="true">
                <S.ProjectImg>
                  <img src="/images/project/200ok.png" alt="project-img" />
                  <span className="overlay" />
                  <S.ShowProject>
                    <div onClick={goTo200ok}>
                      <img src="images/icon/more.png" alt="more" />
                    </div>
                    <a
                      href="https://github.com/zunyange/200OK-frontend"
                      target="_blank"
                      rel="noreferrer"
                      onClick={event => event.stopPropagation()}
                    >
                      <img src="images/icon/github.png" alt="github" />
                    </a>
                  </S.ShowProject>
                </S.ProjectImg>
                <S.ProjectDescription>
                  <S.ProjectLanguage>React Js</S.ProjectLanguage>
                  <S.ProjectContent>
                    <h4>1020을 위한 트렌디한 e-커머스</h4>
                    <div>
                      소비자에게 한눈에 보고 이해할 수 있는 최소한의 정보를
                      시각적인 형태로 제공하고, 그로 인해 사용자가 더 편리하게
                      이용할 수 있도록 구현
                    </div>
                  </S.ProjectContent>
                </S.ProjectDescription>
              </S.ProjectBox>
            </Link>
          </S.Projects>
        </S.ProjectWrap>
      </Width>
    </S.Project>
  );
};

export default Project;

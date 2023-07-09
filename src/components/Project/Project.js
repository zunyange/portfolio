import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const Project = ({ project }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/project');
  };
  return (
    <S.Project ref={project}>
      <Width>
        <S.ProjectWrap>
          <S.Title>Project</S.Title>
          <S.Projects>
            <S.ProjectBox onClick={goToDetail}>
              <S.ProjectImg>
                <img src="/images/jun/dabisu.png" alt="project-img" />
                <span class="overlay" />
                <S.ShowProject>
                  <div onClick={goToDetail}>
                    <img src="images/icon/more.png" alt="more" />
                  </div>
                  <a
                    href="https://dev.saedaron.com/"
                    target="_blank"
                    rel="noreferrer"
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
                    <br />
                    🚀 실제 서비스 운영중 🚀
                  </div>
                  {/* <span>View More</span> */}
                </S.ProjectContent>
              </S.ProjectDescription>
            </S.ProjectBox>
            <S.ProjectBox onClick={goToDetail}>
              <S.ProjectImg>
                <img src="/images/jun/maehwa.png" alt="project-img" />
                <span class="overlay" />
                <S.ShowProject>
                  <div onClick={goToDetail}>
                    <img src="images/icon/more.png" alt="more" />
                  </div>
                  <a
                    href="https://github.com/zunyange/finding-maehwa-frontend"
                    target="_blank"
                    rel="noreferrer"
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
                  {/* <span>View More</span> */}
                </S.ProjectContent>
              </S.ProjectDescription>
            </S.ProjectBox>
            <S.ProjectBox onClick={goToDetail}>
              <S.ProjectImg>
                <img src="/images/jun/200ok.png" alt="project-img" />
                <span class="overlay" />
                <S.ShowProject>
                  <div onClick={goToDetail}>
                    <img src="images/icon/more.png" alt="more" />
                  </div>
                  <a
                    href="https://github.com/zunyange/200OK-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="images/icon/github.png" alt="github" />
                  </a>
                </S.ShowProject>
              </S.ProjectImg>
              <S.ProjectDescription>
                <S.ProjectLanguage>React Js</S.ProjectLanguage>
                <S.ProjectContent>
                  <h4>10~20대를 위한 가성비 e-커머스</h4>
                  <div>
                    소비자에게 한눈에 보고 이해할 수 있는 최소한의 정보를
                    시각적인 형태로 제공하고, 그로 인해 사용자가 더 편리하게
                    이용할 수 있도록 제작
                  </div>
                  {/* <span>
                    View More <img src="images/icon/view.png" alt="more" />
                  </span> */}
                </S.ProjectContent>
              </S.ProjectDescription>
            </S.ProjectBox>
          </S.Projects>
        </S.ProjectWrap>
      </Width>
    </S.Project>
  );
};

export default Project;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const Project = ({ project }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/Detail');
  };
  return (
    <S.Project ref={project}>
      <Width>
        <S.ProjectWrap>
          <S.Title>Project</S.Title>
          <S.Projects>
            <S.ProjectBox>
              <S.ProjectImg>
                <img src="/images/jun/dabisu2.png" />
                <S.ShowProject>
                  <div onClick={goToDetail}>
                    <img src="images/icon/more.png" alt="github" />
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
                  </div>
                </S.ProjectContent>
              </S.ProjectDescription>
            </S.ProjectBox>
            <S.ProjectBox>
              <S.ProjectImg>
                <img src="/images/jun/maehwa.png" />
                <S.ShowProject>
                  <div onClick={goToDetail}>
                    <img src="images/icon/more.png" alt="github" />
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
                  <h4>새다론 정보 서비스 구축 프로젝트</h4>
                  <div>
                    홍보 목적의 원페이지 반응형 UI 구현 및 위치 기반 정보 매칭
                    서비스 모듈 개발
                  </div>
                </S.ProjectContent>
              </S.ProjectDescription>
            </S.ProjectBox>
            <S.ProjectBox>
              <S.ProjectImg>
                <img src="/images/jun/200ok.png" />
                <S.ShowProject>
                  <div onClick={goToDetail}>
                    <img src="images/icon/more.png" alt="github" />
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
                  <h4>새다론 정보 서비스 구축 프로젝트</h4>
                  <div>
                    홍보 목적의 원페이지 반응형 UI 구현 및 위치 기반 정보 매칭
                    서비스 모듈 개발
                  </div>
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

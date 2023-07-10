import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ResumeStyled.js';
import { Width } from '../../styles/common.js';

const Resume = ({ resume }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/project');
  };
  return (
    <S.Resume ref={resume}>
      <Width>
        {/* <S.ResumeWrap>
          도전, 실천 <br />
          저는 제 자신이 성장할 수 있는 일을 우선으로 찾아 계획적으로
          실천합니다. 웹 개발에 필요한 JavaScript를 기본으로, React.js,
          TypeScript 와 같은 트렌드로 자주 다뤄지는 프레임워크를 학습할 뿐만
          아니라 일부러 활용하기도 합니다. 네트워크 및 컴퓨터공학에 관한 기본
          지식에 대한 공부도 진행 중이며, 그 외에도 제가 학습하고 싶은 요소를
          이용한 프로젝트를 직접 기획해 개발해보기도 합니다. 또한 도전하는
          환경을 만들기 위해 제가 참여할 수 있는 일을 찾아 적극적으로
          제안합니다. 현재 TypeScript 기반의 프로젝트와 AWS 서비스 활용을 위한
          온라인 세션을 수강 중입니다.
          <br />
          꼼꼼하게
          <br />
          꼼꼼한 성격으로 작성한 프로그램의 유지 보수 및 인수 인계가 용이하도록
          코드를 작성합니다. 기능이나 단위 별로 코드를 업데이트하고 형식에 맞게
          커밋 메시지를 작성하는 것을 잊지 않습니다. 또한 협업 시 Github
          플로우와 같은 업무 흐름을 이해하고 지키며 혼란 없이 코드에만 집중할 수
          있도록 노력합니다. 결과적으로 인턴 경험 때 진행했던 프로젝트의 기간이
          종료됐음에도 현재 기업에서 유지보수를 하여 웹 사이트를 운영중입니다.
          <br />
          저는 이러한 제 장점들을 살린 프로그래밍 능력들을 더욱 발전시키기 위해
          다른 개발자들과 자주 소통을 하며, 개발 블로그에도 기록을 남기고
          있습니다. 고민하는 것을 공유할 뿐만 아니라 아는 것들에 대해서도
          이야기하며, 개발자로서 성장하는 계획을 끊임없이 생각하고 실천하기 위한
          원동력을 얻습니다. 더불어 그렇게 계획한 것은 일단 실행해보며 적극성을
          기르기도 합니다.
        </S.ResumeWrap> */}
        <S.ResumeWrap>
          <S.Title>Resume</S.Title>
          <S.ResumeBox one>
            <S.ContentTitle>Education</S.ContentTitle>
            <S.ContentBox>
              <S.Content>
                • &nbsp;Frontend 6명, Backend 3명으로 이루어진 스터디
                그룹입니다.
              </S.Content>
              <S.Content>
                • &nbsp;CS 지식, JavaScript, React 등 기술적 질문에 대해
                토론하며 학습하고 있습니다.
              </S.Content>
              <S.Content last>
                • &nbsp;TypeScript를 기반으로 한 사이드 프로젝트 진행 중입니다.
              </S.Content>
            </S.ContentBox>
          </S.ResumeBox>
          <S.ResumeBox two>
            <S.ContentTitle> </S.ContentTitle>
            <S.ContentBox>
              <S.Content>
                • &nbsp;Frontend 6명, Backend 3명으로 이루어진 스터디
                그룹입니다.
              </S.Content>
              <S.Content>
                • &nbsp;CS 지식, JavaScript, React 등 기술적 질문에 대해
                토론하며 학습하고 있습니다.
              </S.Content>
              <S.Content last>
                • &nbsp;TypeScript를 기반으로 한 사이드 프로젝트 진행 중입니다.
              </S.Content>
            </S.ContentBox>
          </S.ResumeBox>
          <S.ResumeBox three>
            <S.ContentTitle> </S.ContentTitle>
            <S.ContentBox>
              <S.Content>
                • &nbsp;Frontend 6명, Backend 3명으로 이루어진 스터디
                그룹입니다.
              </S.Content>
              <S.Content>
                • &nbsp;CS 지식, JavaScript, React 등 기술적 질문에 대해
                토론하며 학습하고 있습니다.
              </S.Content>
              <S.Content last>
                • &nbsp;TypeScript를 기반으로 한 사이드 프로젝트 진행 중입니다.
              </S.Content>
            </S.ContentBox>
          </S.ResumeBox>
          <S.PotentWrap>
            <S.PotentTitle>Potential</S.PotentTitle>
            <S.PotentBox>
              <S.Potent>성장 가능성</S.Potent>
              <S.CommitBox>
                <img src="images/jun/commit.png" alt="git-commit" />
                <div>
                  <div>
                    개발 공부 이후, 매일 조금씩이라도 코딩하고 꾸준히 커밋하는
                    습관을 기르고 있습니다. 이를 통해 코딩에 대한 자신감은 물론
                    성장하는 저의 모습을 보며 성취감을 느끼고 있으며, 지속적인
                    성장의 원동력인?{' '}
                    <a
                      href="https://velog.io/@zunyange"
                      target="_blank"
                      rel="noreferrer"
                    >
                      개발 블로그
                    </a>{' '}
                    또한 꾸준히 작성하고 있습니다.
                  </div>
                </div>
              </S.CommitBox>
            </S.PotentBox>
          </S.PotentWrap>
        </S.ResumeWrap>
      </Width>
    </S.Resume>
  );
};

export default Resume;

import React, { useState, useEffect } from 'react';
import * as S from './ResumeStyled.js';
import { Width } from '../../styles/common.js';

const Resume = ({ resume }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data/Study.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <S.Resume ref={resume}>
      <Width>
        <S.ResumeWrap>
          <S.Title>Resume</S.Title>
          <S.ResumeBox one>
            <S.ContentTitle>Why Frontend?</S.ContentTitle>
            <S.ContentBox>
              <S.Subtitle>사용자 = 0순위</S.Subtitle>
              <S.Content>
                <div>
                  관광개발학을 전공하여 고객 중심의 다양한 니즈를 파악하고
                  서비스의 질을 높여 사용자에게 더 나은 환경을 제공하기 위한
                  솔루션을 배웠습니다. 이를 통해 아이디어를 직접 그려내기도
                  하며, 유저에게 빠르게 피드백을 받고 소통할 수 있다는 점에서
                  프론트엔드 개발자로써 제 역량을 발휘할 자신이 있습니다.
                </div>
                <div>
                  현재는 프로젝트에서 필연적인 PET 분석(<strong>P</strong>
                  roduct, <strong>E</strong>nd-User, <strong>T</strong>ech)을
                  통해 우리 팀의 서비스 가치를 확립하는 과정에서 흥미를 찾았고,
                  개발자는 수많은 결정사항과 작업에 대해 서로 소통하고 협업하며
                  문제를 해결해 나가는 역할임을 깨달았습니다. 또한, 타인을
                  오롯이 존중하는 것에서 그치지 않고, 더 나은 방향으로 그 이상의
                  가치를 추구할 줄 아는 것도 중요함을 느꼈습니다. 이러한 저의
                  소비자 중심 사고와 개발자 기술을 접목하여 소비자에게 편의를
                  주고 소비자들의 삶의 가치를 높이는 것에도 자신이 있습니다.
                </div>
              </S.Content>
            </S.ContentBox>
          </S.ResumeBox>
          <S.ResumeBox two>
            <S.ContentTitle>Challenge</S.ContentTitle>
            <S.ContentBox>
              <S.Subtitle>끊임없이 도전하며 변화를 즐기자!</S.Subtitle>
              <S.Content>
                <div>
                  제 자신이 성장할 수 있는 일을 우선으로 찾아 계획적으로
                  실천합니다. 웹 개발에 필요한 JavaScript를 기본으로, React.js,
                  Vue와 같은 트렌드로 자주 다뤄지는 프레임워크를 학습할 뿐만
                  아니라 더 나은 개발자 경험과 코드 퀄리티 향상을 위해
                  TypeScript로{' '}
                  <a
                    href="https://github.com/afterWe/Run_Base_front-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 프로젝트{' '}
                  </a>
                  진행 중 입니다. 그 외에도 제가 학습하고 싶은 요소를 이용한
                  프로젝트를 직접 기획해 개발해보기도 합니다. 또한 도전하는
                  환경을 만들기 위해 제가 참여할 수 있는 일을 찾아 적극적으로
                  제안하고 현재는 AWS 클라우드 역량 강화/서비스 활용를 위해 AWS
                  Builders 온라인 시리즈 교육 중입니다.
                </div>
              </S.Content>
            </S.ContentBox>
          </S.ResumeBox>
          <S.ResumeBox three>
            <S.ContentTitle>For All</S.ContentTitle>
            <S.ContentBox>
              <S.Subtitle>꼼꼼하게 모두와 함께</S.Subtitle>
              <S.Content last>
                <div>
                  꼼꼼한 성격을 지니고 있어 작성한 프로그램의 유지 보수 및 인수
                  인계가 용이하도록 코드를 작성합니다. 기능이나 단위 별로 코드를
                  업데이트하고 형식에 맞게 커밋 메시지를 작성하는 것을 잊지
                  않습니다. 또한 협업 시 Github 플로우와 같은 업무 흐름을
                  이해하고 지키며 혼란 없이 코드에만 집중할 수 있도록
                  노력합니다. 결과적으로 인턴 경험 때에 진행했던 프로젝트의
                  기간이 종료됐음에도 현재 기업에서 유지 보수를 하여 현재{' '}
                  <a
                    href="https://dev.saedaron.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 웹 서비스{' '}
                  </a>
                  운영 중입니다.
                </div>
                <div>
                  이러한 제 장점들을 살린 프로그래밍 능력들을 더욱 발전시키기
                  위해 다른 개발자들과 자주 소통을 하며, 생각을 깔끔하게
                  정리하기 위해{' '}
                  <a
                    href="https://velog.io/@zunyange"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 개발 블로그
                  </a>{' '}
                  에도 꾸준히 기록을 남기고 있습니다. 아는 것에 그치지 않고 다른
                  사람들과 공유하고 피드백을 나누는 것을 중요한 가치라고
                  여깁니다.
                </div>
              </S.Content>
            </S.ContentBox>
          </S.ResumeBox>
          <S.PotentWrap>
            <S.PotentTitle>Potential</S.PotentTitle>
            <S.PotentBox>
              <S.Potent>Slow and Steady wins the race.</S.Potent>
              <S.CommitBox one>
                <img src="images/jun/commit.png" alt="git-commit" />
                <div>
                  <div>
                    개발을 시작한 이후부터 지금까지, 조금씩이라도{' '}
                    <strong>꾸준히</strong> 코딩하고 커밋하는 습관을 기르고
                    있습니다. 이를 통해 코딩에 대한 자신감은 물론 성장하는 저의
                    모습을 보며 성취감을 느끼고, 개발자로서 성장하기 위해
                    끊임없이 생각하고 실천하기 위한 동기부여를 얻고 있습니다.
                  </div>
                </div>
              </S.CommitBox>
            </S.PotentBox>
          </S.PotentWrap>
          <S.PotentWrap last>
            <S.PotentTitle> </S.PotentTitle>
            <S.PotentBox last>
              <S.Potent> </S.Potent>
              <S.StudyWrap last>
                <S.StudyBox>
                  {data.map(({ id, title, content, degree }) => (
                    <S.Table key={id}>
                      <S.Thead>
                        <S.StyledTh
                          style={
                            id === 1
                              ? {
                                  backgroundColor: '#eeeeee',
                                  fontFamily: 'fontBold',
                                }
                              : {}
                          }
                        >
                          {title}
                        </S.StyledTh>
                      </S.Thead>
                      {id === 1 ? (
                        <S.StyledTr
                          style={{
                            backgroundColor: '#eeeeee',
                            fontFamily: 'fontBold',
                          }}
                        >
                          <S.StyledTdOne>{content}</S.StyledTdOne>
                          <S.StyledTd>{degree}</S.StyledTd>
                        </S.StyledTr>
                      ) : (
                        <S.StyledTr>
                          <S.StyledTdOne>{content}</S.StyledTdOne>
                          <S.StyledTd
                            style={
                              id >= 7 && id <= 11 ? { fontWeight: 'Bold' } : {}
                            }
                          >
                            {degree}
                          </S.StyledTd>
                        </S.StyledTr>
                      )}
                    </S.Table>
                  ))}
                </S.StudyBox>
              </S.StudyWrap>
            </S.PotentBox>
          </S.PotentWrap>
        </S.ResumeWrap>
      </Width>
    </S.Resume>
  );
};

export default Resume;

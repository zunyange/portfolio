import React, { useEffect, useState } from 'react';
import * as S from './HomeStyled.js';
import { Width } from '../../styles/common.js';

const Home = ({ home, onMoveAbout }) => {
  // const txt = '사용자 중심 설계에 중점을 둔 문제 해결사';
  // const txt = '김준영';
  const txt =
    '안녕하세요! 끈기와 열정으로 문제를 해결하는 개발자, 김준영입니다.';
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const AskToAdmit = () => {
    alert('이력서를 다운받으시겠습니까?');
  };

  return (
    <S.Home ref={home}>
      <Width>
        <S.IntroduceWrap>
          <S.Introduce>
            Web Frontend Developer
            <p>김준영</p>
          </S.Introduce>
          <S.SubIntroduce>
            {text}
            <br />
            {/* 다양한 삶과 문화에 대한 탐구심이 강하여 사용자의 다양한 니즈를
            충족시키고 해결하는 일을 즐기며, 팀을 위해 희생하고 배려할 줄 아는
            개발자입니다. <br /> */}
            {/* 사용자에게 최적의 경험을 전달해주려는 자세로 개발하며, 능동적인
            커뮤니케이션 및 협업으로 문제 해결과 비즈니스 성장에 적극적으로
            임하고 있습니다. */}
            개발 커뮤니티 활동이나 프로젝트 등을 통해 다양한 개발 경험을 즐기고
            있습니다. <br />
            공유하고 기록하는 것을 좋아하여 개발 블로그에는 80여 개의 기술
            포스트를 작성했습니다. <br />{' '}
            <div>
              성장 가능성에 대해 더욱 고민하고 노력하며 능동적인 커뮤니케이션 및
              협업으로 <br />
              비즈니스 성장에 적극적으로 임하겠습니다.
            </div>
          </S.SubIntroduce>
          <S.GoTo>
            <a
              href="https://github.com/zunyange"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GoToGithub src="/images/icon/github.png" alt="Github" />
            </a>
            <a
              href="https://velog.io/@zunyange"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GoToVelog src="/images/icon/velog.png" alt="Velog" />
            </a>
            <a
              href="https://www.linkedin.com/in/junyoung-kim-067765281/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GoToLinkedin src="/images/icon/linkedin.png" alt="Linkedin" />
            </a>
            <a>
              <S.GoToResume
                onClick={AskToAdmit}
                src="/images/icon/resume.png"
                alt="Resume"
              />
            </a>
            <a href="mailto:giveyoung530@gmail.com">
              <S.GoToMail src="/images/icon/mail.png" alt="Gmail" />
            </a>
          </S.GoTo>
          <S.MoreWrap>
            <S.MoreAbout href="#aboutme" onClick={onMoveAbout} role="button">
              More about me
            </S.MoreAbout>
          </S.MoreWrap>
        </S.IntroduceWrap>
      </Width>
    </S.Home>
  );
};

export default Home;

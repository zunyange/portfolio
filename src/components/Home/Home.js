import React, { useEffect, useState } from 'react';
import * as S from './HomeStyled.js';
import { Width } from '../../styles/common.js';

const Home = ({ home, onMoveAbout }) => {
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
    const confirmed = window.confirm('이력서를 다운받으시겠습니까?');

    if (confirmed) {
      const link = document.createElement('a');
      link.href = '/images/jun/JunyoungKim_resume.pdf';
      link.target = '_blank';
      link.download = '김준영_이력서.pdf';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    }
  };

  return (
    <S.Home ref={home}>
      <Width>
        <S.IntroduceWrap>
          <S.Introduce>
            Web Frontend Developer
            <p>김준영</p>
          </S.Introduce>
          <S.SubIntroduce laptop>
            {text}
            <br />
            개발 커뮤니티 활동이나 프로젝트 등을 통해 다양한 개발 경험을 즐기고
            있습니다. <br />
            공유하고 기록하는 것을 좋아하여 개발 블로그에는 90여 개의 기술
            포스트를 작성했습니다. <br />{' '}
            <div>
              성장 가능성에 대해 더욱 고민하고 노력하며 능동적인 커뮤니케이션 및
              협업으로 <br />
              비즈니스 성장에 적극적으로 임하겠습니다.
            </div>
          </S.SubIntroduce>
          <S.SubIntroduce responsive>
            {text}
            <br />
            개발 커뮤니티 활동이나 프로젝트 등을 통해 다양한 개발 경험을 즐기고
            있습니다. 공유하고 기록하는 것을 좋아하여 개발 블로그에는 80여 개의
            기술 포스트를 작성했습니다. <br />{' '}
            <div>
              성장 가능성에 대해 더욱 고민하고 노력하며 능동적인 커뮤니케이션 및
              협업으로 비즈니스 성장에 적극적으로 임하겠습니다.
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
              href="https://www.linkedin.com/in/giveyoung530/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GoToLinkedin src="/images/icon/linkedin.png" alt="Linkedin" />
            </a>
            <S.GoToResume
              onClick={AskToAdmit}
              src="/images/icon/resume.png"
              alt="Resume"
            />
            <a href="mailto:giveyoung530@gmail.com">
              <S.GoToMail src="/images/icon/send.png" alt="Gmail" />
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

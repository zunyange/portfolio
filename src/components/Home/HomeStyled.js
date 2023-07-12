import styled from 'styled-components';

export const Home = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  background: linear-gradient(60deg, #ff6596, #60bef8, #d88cff);
  background-size: 500% 500%;
  animation: color 50s ease-in-out infinite;
  @keyframes color {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const IntroduceWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  p {
    font-size: 50px;
    font-weight: bold;
  }
  span {
    font-size: 13px;
    margin-top: 50px;
  }
`;
export const Introduce = styled.div`
  font-size: 40px;
  line-height: 55px;
  font-family: 'fontEng';
  margin-top: 10px;
`;

export const SubIntroduce = styled.div`
  font-size: 20px;
  width: 850px;
  line-height: 30px;
  display: flex;
  padding-top: 40px;
  display: inline-block;
  div {
    margin-top: 10px;
  }
`;

export const GoTo = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 50px;
`;

export const GoToGithub = styled.img`
  width: 50px;
  cursor: pointer;
  transition: all 0.8s;
  //왜 안될까 ㅜㅜㅜㅜ
  &:hover {
    content: url('images/icon/github-bk.png');
    transition: all 0.8s;
  }
`;

export const GoToVelog = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    content: url('images/icon/velog-green.png');
  }
`;

export const GoToLinkedin = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    content: url('images/icon/linkedin-bk.png');
  }
`;

// export const GoToMail = styled.img`
//   width: 50px;
//   cursor: pointer;
//   &:hover {
//     content: url('images/icon/mail-bk.png');
//   }
// `;

export const GoToResume = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    content: url('images/icon/resume-bk.png');
  }
`;

export const MoreWrap = styled.div``;
export const MoreAbout = styled.div`
  border: 1px solid;
  border-radius: 8px;
  padding: 13px;
  margin-top: 50px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffffff;
    background-color: #ffffff;
    opacity: 0.9;
    color: #000000;
  }
`;
export const Span = styled.span`
  font-weight: bold;
  font-size: ${({ first }) => (first ? '20px' : '22px')};
  color: ${({ first }) => (first ? '#db7680' : '#3178c6')};
`;

// background-image: url('images/Kim/Maintop.png');
// background-repeat: no-repeat;
// background-size: cover;
// background-color: #e8f9ff;

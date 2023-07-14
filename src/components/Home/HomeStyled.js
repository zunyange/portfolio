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
  transition: 0.7s;
  /* &:hover {
    filter: invert(100%);
  } */
  ${GoTo} :hover & {
    display: none;
  }
`;

export const GoToBlack = styled.img`
  width: 50px;
  display: none;
  ${GoTo} :hover & {
    display: block;
  }
`;

export const GoToVelog = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 1s;
  background-image: url('/images/icon/velog.png');
  background-size: cover;

  &:hover {
    filter: hue-rotate(160deg);
  }
`;
export const GoToLinkedin = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    content: url('images/icon/linkedin-bk.png');
  }
`;

export const GoToMail = styled.img`
  width: 50px;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    filter: invert(100%);
  }
`;

export const GoToResume = styled.img`
  width: 50px;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    filter: invert(100%);
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

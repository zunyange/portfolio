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
`;
export const Introduce = styled.div`
  /* font-family: fontCafe; */
  font-size: 40px;
  line-height: 55px;
`;

export const SubIntroduce = styled.div`
  font-size: 20px;
  width: 600px;
  line-height: 30px;
  display: flex;
  padding-top: 20px;
  display: inline-block;
`;

export const GoTo = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
`;

export const GoToGithub = styled.img`
  width: 50px;
  cursor: pointer;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  &:hover {
    content: url('images/github-bk.png');
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }
`;

export const GoToVelog = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    content: url('images/velog-bk.png');
  }
`;

export const GoToLinkedin = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    content: url('images/linkedin-bk.png');
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

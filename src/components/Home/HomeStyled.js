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
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 2.2rem;
    }
  }
  span {
    font-size: 13px;
    margin-top: 50px;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
`;

export const Introduce = styled.div`
  font-size: 40px;
  line-height: 55px;
  font-family: 'fontEng';
  margin-top: 10px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 2.2rem;
  }
`;

export const SubIntroduce = styled.div`
  font-size: 20px;
  width: 850px;
  line-height: 30px;
  padding-top: 40px;
  display: inline-block;
  div {
    margin-top: 10px;
  }
  display: ${({ responsive }) => (responsive ? 'none' : 'inline-block')};
  @media ${({ theme }) => theme.device.tablet} {
    width: 600px;
    display: ${({ responsive }) => (responsive ? 'inline-block' : 'none')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 360px;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const GoTo = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 50px;
  @media ${({ theme }) => theme.device.mobile} {
    gap: 20px;
  }
`;

export const GoToGithub = styled.img`
  width: 50px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    filter: invert(100%);
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

export const GoToBlack = styled.img`
  width: 50px;
  display: none;
  ${GoTo} :hover & {
    display: block;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

export const GoToVelog = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    filter: invert(100%);
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const GoToLinkedin = styled.img`
  width: 50px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    filter: invert(100%);
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

export const GoToResume = styled.img`
  width: 50px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    filter: invert(100%);
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const GoToMail = styled.img`
  width: 55px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    filter: invert(100%);
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

export const MoreWrap = styled.div``;

export const MoreAbout = styled.div`
  border: 1px solid;
  border-radius: 8px;
  padding: 13px;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    border: 1px solid #ffffff;
    background-color: #ffffff;
    opacity: 1;
    color: #000000;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 18px;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: ${({ first }) => (first ? '20px' : '22px')};
  color: ${({ first }) => (first ? '#db7680' : '#3178c6')};
`;

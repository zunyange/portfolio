import styled from 'styled-components';

export const Contact = styled.div`
  height: 38vh;
  width: 100%;
  background-color: #f5fbff;
  @media ${({ theme }) => theme.device.tablet} {
    height: auto;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    min-height: auto;
    ${Contact} {
      height: auto;
    }
  }
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 40px;
  margin: 70px 0 40px 0;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 70px;
  }
`;

export const ContactWrap = styled.div``;

export const GoTo = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
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

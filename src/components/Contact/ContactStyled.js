import styled from 'styled-components';

export const Contact = styled.div`
  height: 30vh;
  width: 100%;
  background-color: rgba(246, 246, 246, 0.4);
  @media ${({ theme }) => theme.device.tablet} {
    height: auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    height: 29vh;
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
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 35px;
    margin: 50px 0 30px 0;
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
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

export const GoToVelog = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const GoToLinkedin = styled.img`
  width: 50px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

export const GoToMail = styled.img`
  width: 54px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

export const GoToInsta = styled.img`
  width: 50px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
  }
`;

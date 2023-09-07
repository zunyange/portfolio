import styled from 'styled-components';

export const Contact = styled.div`
  height: 30vh;
  width: 100%;
  background-color: rgba(245, 251, 255, 0.4);
  @media ${({ theme }) => theme.device.tablet} {
    height: 39vh;
  }
  @media ${({ theme }) => theme.device.mobile} {
    height: 34vh;
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

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
  }
`;

export const GoTo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 800px;
  justify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
    width: 400px;
    gap: 15px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: 1fr;
    width: 165px;
  }
`;

// export const GoToGithub = styled.img`
//   width: 50px;
//   cursor: pointer;
//   @media ${({ theme }) => theme.device.mobile} {
//     width: 40px;
//   }
// `;

// export const GoToVelog = styled.img`
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   @media ${({ theme }) => theme.device.mobile} {
//     width: 40px;
//     height: 40px;
//   }
// `;

// export const GoToLinkedin = styled.img`
//   width: 50px;
//   cursor: pointer;
//   @media ${({ theme }) => theme.device.mobile} {
//     width: 40px;
//   }
// `;

// export const GoToMail = styled.img`
//   width: 54px;
//   cursor: pointer;
//   @media ${({ theme }) => theme.device.mobile} {
//     width: 40px;
//   }
// `;

// export const GoToInsta = styled.img`
//   width: 50px;
//   cursor: pointer;
//   @media ${({ theme }) => theme.device.mobile} {
//     width: 40px;
//   }
// `;

export const GoToGithub = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: rgb(101, 101, 109);
    font-weight: bold;
  }
  img {
    width: 17px;
    margin-right: 10px;
    @media ${({ theme }) => theme.device.mobile} {
      width: 15px;
    }
  }
`;

export const GoToVelog = styled(GoToGithub)``;
export const GoToLinkedin = styled(GoToGithub)``;
export const GoToInsta = styled(GoToGithub)``;

export const SendMail = styled(GoToGithub)`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  img {
    width: 20px;
  }
`;

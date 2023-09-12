import styled from 'styled-components';

export const Contact = styled.div`
  width: 100%;
  background-color: #f5fbff;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 6% 0 4% 0;
  @media only screen and (max-width: 700px) {
    padding: 13% 0 9% 0;
  }
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 40px;
  margin-bottom: 70px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 35px;
    margin-bottom: 55px;
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
    width: 185px;
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
      margin-right: 12px;
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
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 14px;
  }
  img {
    width: 20px;
  }
`;

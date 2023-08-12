import styled from 'styled-components';

export const Resume = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const ResumeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 80px;
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 35px;
  margin: 80px 0 80px 0;
`;

export const ResumeBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: ${({ one }) => (one ? '30px 20px 0 20px' : '25px 20px 0 20px')};
  border-bottom: ${({ three }) => (three ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ three }) => (three ? '30px' : '0')};
  border-top: ${({ one }) => (one ? 'solid 1px #ccc' : '0')};
  @media ${({ theme }) => theme.device.tablet} {
    width: 700px;
    grid-template-columns: 1fr 2fr;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 360px;
    grid-template-columns: 1fr;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
  }
`;

export const ContentTitle = styled.div`
  width: 150px;
  font-size: ${({ three }) => (three ? '20px' : '25px')};
  font-family: ${({ three }) => (three ? 'fontCafe' : 'fontEng')};
`;

export const ContentBox = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 40px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  font-family: fontBold;
  font-size: 18px;
  margin-bottom: 8px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
  }
`;

export const Content = styled.div`
  text-align: left;
  line-height: 27px;
  margin: ${({ title }) => (title ? '0 0 10px 0' : '0')};
  border-bottom: ${({ last }) => (last ? '0' : 'solid 1px #ccc')};
  padding-bottom: ${({ last }) => (last ? '0' : '25px')};
  a {
    color: #e99999;
    text-decoration: none;
    font-weight: bold;
    /* background-image: -webkit-linear-gradient(90deg, #e29999, #8b00ff); */

    @-webkit-keyframes hue {
      from {
        -webkit-filter: hue-rotate(0deg);
      }
      to {
        -webkit-filter: hue-rotate(-360deg);
      }
    }
    &:hover {
      color: #000000;
      border-bottom: 0.5px solid;
      background-image: -webkit-linear-gradient(90deg, #369139, #e63c82);
      @-webkit-keyframes hue {
        from {
          -webkit-filter: hue-rotate(0deg);
        }
        to {
          -webkit-filter: hue-rotate(-360deg);
        }
      }
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: hue 3s infinite linear;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
    line-height: 23px;
    word-break: normal;
    div {
      padding-bottom: 20px;
    }
    padding-bottom: ${({ last }) => (last ? '0px' : '0')};
  }
`;

export const PotentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: ${({ one }) => (one ? '30px 20px 0 20px' : '25px 20px 0 20px')};
  border-bottom: ${({ last }) => (last ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ last }) => (last ? '5px' : '0')};
  @media ${({ theme }) => theme.device.tablet} {
    width: 700px;
    grid-template-columns: 1fr 2fr;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 360px;
    grid-template-columns: 1fr;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
    padding: ${({ last }) => (last ? '0px' : '')};
  }
`;

export const PotentTitle = styled.div`
  width: 150px;
  font-size: 25px;
  font-family: fontEng;
`;

export const PotentBox = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: ${({ last }) => (last ? '0px' : '40px')};
  }
`;

export const Potent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-family: fontBold;
  font-size: 18px;
  margin-bottom: 5px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 15px;
  }
`;

export const CommitBox = styled.div`
  display: flex;
  line-height: 27px;
  text-align: left;
  border-bottom: ${({ last }) => (last ? '0' : 'solid 1px #ccc')};
  padding-bottom: 30px;
  img {
    width: 300px;
    object-fit: contain;
  }
  div {
    margin-left: ${({ one }) => (one ? '5px' : '0')};
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: wrap;
    div {
      margin: 5px 0 0 0px;
      @media ${({ theme }) => theme.device.mobile} {
        margin: 0;
        font-size: ${({ last }) => (last ? '12px' : '14px')};
        line-height: 23px;
      }
    }
  }
`;

export const StudyWrap = styled(CommitBox)`
  border-bottom: ${({ last }) => (last ? '0' : 'solid 1px #ccc')};
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
`;

export const StudyBox = styled.div`
  width: 400px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 300px;
  }
`;

export const Table = styled.table`
  display: flex;
`;

export const Thead = styled.thead`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  width: 100px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 75px;
    font-size: 11px;
  }
`;

export const StyledTr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  width: 380px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 290px;
    font-size: 11px;
  }
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  font-weight: 600;
  padding: 4px;
  border-right: 1px solid #ccc;
  @media ${({ theme }) => theme.device.mobile} {
    width: 55px;
    font-size: 11px;
  }
`;

export const StyledTd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  width: 70px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 45px;
  }
`;

export const StyledTdOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  width: 300px;
  border-right: 1px solid #ccc;
  @media ${({ theme }) => theme.device.mobile} {
    width: 225px;
  }
`;

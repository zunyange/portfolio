import styled from 'styled-components';

export const ProjectDetail = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #e6bebe;
`;

export const Title = styled.div`
  font-family: fontCafe;
  font-size: 20px;
  margin-bottom: 60px;
`;

export const DetailWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 100;
  overflow-y: auto;
`;

export const Detail = styled.div`
  position: relative;
  width: 900px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 48px 48px 35px 48px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px;
  margin: 32px auto;
  @media ${({ theme }) => theme.device.tablet} {
    width: 700px;
  }
  @media only screen and (max-width: 700px) {
    width: 600px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 2rem;
    border-radius: 12px;
    margin: 32px 0 100px 0;
  }
`;

export const ProjectTitle = styled.div`
  font-family: fontBold;
  font-size: 50px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 40px;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-family: fontBase;
  color: #8a8a8a;
  right: 27px;
  top: 27px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const CloseBtn2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 17px;
  font-family: fontBase;
  color: #8a8a8a;
  right: 27px;
  cursor: pointer;
  img {
    width: 22px;
    height: 22px;
    margin-right: 5px;
  }
`;

export const ProjectSubTitle = styled.div`
  margin: 10px 0;
`;

export const SubTitle = styled.div`
  margin-bottom: 10px;
  a {
    text-decoration-line: none;
    color: #bc231b;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
  }
`;

export const Term = styled.div`
  font-family: fontLight;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 22px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 13px;
  }
`;

export const ProjectSkill = styled.div`
  span {
    display: inline-block;
    padding: 6px 10px;
    background-color: #eeeeee;
    border-radius: 5px;
    margin: 0px 7px 5px 0;
    font-size: 13px;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 12px;
    }
  }
`;

export const ProjectImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  font-family: fontBold;
  font-size: 25px;
  img {
    width: 820px;
    @media ${({ theme }) => theme.device.tablet} {
      width: 600px;
    }
    @media only screen and (max-width: 620px) {
      width: 500px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 400px;
    }
    @media only screen and (max-width: 400px) {
      width: 360px;
    }
  }
`;

export const Description = styled.div`
  line-height: 27px;
  padding: 0 10px;
  padding-top: ${({ point }) => (point ? '10px' : '0')};
  padding-right: ${({ link }) => (link ? '0' : '10px')};
  span {
    font-size: 18px;
    font-family: fontBold;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 15px;
    }
  }
  strong {
    box-shadow: inset 0 -10px 0 #daf0e9;
  }
  b {
    box-shadow: inset 0 -10px 0 #e4ecf7;
  }
  a {
    display: inline-block;
    text-decoration-line: none;
    margin-top: 40px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0;
    line-height: 23px;
    font-size: 15px;
  }
`;

export const ClickMore = styled.span`
  font-size: 15px;
  font-family: fontLight;
  padding-left: 275px;
  line-height: 20px;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    padding-left: 110px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 100px;
    font-size: 13px;
  }
`;

export const VideoWrap = styled.div`
  margin-left: 13px;
  display: flex;
  justify-content: center;
  video {
    width: 780px;
    @media ${({ theme }) => theme.device.tablet} {
      width: 560px;
    }
    @media only screen and (max-width: 620px) {
      width: 460px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 360px;
    }
    @media only screen and (max-width: 400px) {
      width: 320px;
    }
  }
`;

export const ShowCode = styled.div`
  font-size: 15px;
  font-family: fontLight;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 13px;
  }
`;

export const CodeWrap = styled.div`
  border: 1px rgb(164, 164, 164, 0.3) solid;
  padding: 10px;
  font-size: 15px;
  line-height: 22px;
  img {
    width: 100%;
  }
  c {
    /* border: #f4f4f4;
    border-radius: 5px; */
    background-color: #ececec;
    font-weight: bold;
    font-size: 14px;
  }
`;

import styled from 'styled-components';

export const About = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const Star = styled.img`
  width: 100px;
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 35px;
  margin: 80px 0 40px 0;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 60px 0 40px 0;
  }
`;

export const Aboutme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 80px;
`;

export const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-weight: bold;
  width: 1000px;
  padding: 20px;
  border-bottom: solid 1px #ccc;

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
  }
`;

export const Profile = styled.div`
  width: 150px;
  border-radius: 70%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileBox = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  img {
    width: 20px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const Number = styled.li`
  display: flex;
`;

export const Mail = styled.li`
  display: flex;
  a {
    display: flex;
    text-decoration-line: none;
    color: #000000;
  }
  &:hover {
    color: #000000;
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
`;

export const School = styled.div`
  display: flex;
`;

export const Appeal = styled.div`
  display: flex;
`;

export const SkillWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: 30px 20px;
  border-bottom: solid 1px #ccc;
  @media ${({ theme }) => theme.device.tablet} {
    width: 700px;
    grid-template-columns: 1fr 2fr;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 350px;
    grid-template-columns: 1fr;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SkillTitle = styled.div`
  width: 150px;
  font-size: 25px;
  font-family: fontEng;
  @media ${({ theme }) => theme.device.mobile} {
    padding-bottom: 30px;
  }
`;

export const SkillBox = styled.div`
  display: flex;
  width: 500px;
  overflow-wrap: normal;
  @media ${({ theme }) => theme.device.tablet} {
    width: 430px;
    display: flex;
    flex-wrap: wrap;
  }
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: space-evenly;
  }
`;

export const ImgWrap = styled.div`
  margin-right: 30px;
  /* animation: 20s slide infinite linear; */
  img {
    width: 60px;
    /* @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-2300%);
      }
    }
    &:hover {
      transform: translateZ(10px);
    } */
    @media ${({ theme }) => theme.device.mobile} {
      width: 55px;
    }
  }
  span {
    width: 55px;
    font-family: fontEng;
    font-size: 12px;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 11px;
      width: 48px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 10px;
    width: 70px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-right: 0;
  }
`;

export const EduWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: ${({ one }) => (one ? '30px 20px 0 20px' : '25px 20px 0 20px')};
  border-bottom: ${({ three }) => (three ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ three }) => (three ? '30px' : '0')};
  @media ${({ theme }) => theme.device.tablet} {
    width: 700px;
    grid-template-columns: 1fr 2fr;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 350px;
    grid-template-columns: 1fr;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const EduTitle = styled.div`
  width: 150px;
  font-size: 25px;
  font-family: fontEng;
  @media ${({ theme }) => theme.device.mobile} {
    padding-bottom: 30px;
  }
`;

export const EduBox = styled.div``;

export const Education = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #a4a4a4;
  padding: 5px 0;
  span {
    font-family: fontBold;
    font-size: 18px;
    color: #000000;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 15px;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 11px;
  }
`;

export const Content = styled.div`
  display: flex;
  text-align: left;
  line-height: 27px;
  margin: ${({ title }) => (title ? '0 0 10px 0' : '0')};
  border-bottom: ${({ last }) => (last ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ last }) => (last ? '25px' : '0')};
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
    line-height: 23px;
  }
`;

import styled from 'styled-components';

export const Project = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f5fbff;
  @media ${({ theme }) => theme.device.tablet} {
    height: auto;
  }
`;

export const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  @media ${({ theme }) => theme.device.mobile} {
    min-height: auto;
    ${Project} {
      height: auto;
    }
  }
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 40px;
  margin-bottom: 60px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 70px;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 2fr 2fr;
  }
  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 8px;
  flex-direction: column;
  margin: 32px;
  padding: 16px;
  transition: transform 0.3s, box-shadow 0.3s, -webkit-transform 0.3s;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: ${({ last }) => (last ? '60px' : '32px')};
  }
`;

export const ProjectImg = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 230px;
  position: relative;
  width: 100%;
  cursor: pointer;
  img {
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    border: 1px solid #ffffff;
    border-radius: 8px;
    transition: opacity 0.5s ease;
    ${ProjectBox}:hover & {
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
`;
export const ShowProject = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease;
  ${ProjectBox}:hover & {
    visibility: visible;
    opacity: 1;
  }
  a,
  div {
    text-decoration: none;
    border: 1px solid #000000;
    border-radius: 50%;
    background-color: #000000;
    margin: 16px;
    height: 40px;
    width: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    img {
      height: 23px;
      width: 23px;
      object-fit: cover;
    }
  }
`;

export const ProjectDescription = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  position: relative;
  width: 100%;
`;

export const ProjectLanguage = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 8px 16px;
  position: absolute;
  top: -25px;
  font-size: 14px;
  font-family: fontBold;
  color: #a4a4a4;
`;

export const ProjectContent = styled.div`
  height: 130px;
  h4 {
    font-weight: bold;
    font-family: fontBold;
    margin: 10px 0;
  }
  div {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 13px;
    a {
      margin-top: 10px;
      font-weight: bold;
      color: #000000;
      text-decoration: none;
      &:hover {
        border-bottom: 0.5px solid;
        /* text-decoration: wavy underline; */
      }
    }
  }
  span {
    color: #b9b9b9;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 7px;
    img {
      width: 20px;
    }
  }
`;

import styled from 'styled-components';

export const Project = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fafafa;
`;

export const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 40px;
  margin-bottom: 60px;
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ProjectBox = styled.div`
  width: 300px;
  height: 420px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0.5rem;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  /* transition: all 0.3s ease; */
  transition: transform 0.3s, box-shadow 0.3s, -webkit-transform 0.3s;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;

  &:hover {
    transform: translateY(-5px);
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
    border-radius: 0.5rem;
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
    border-radius: 0.5rem;
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
    margin: 1rem;
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
  padding: 0.5rem;
  position: relative;
  width: 100%;
`;
export const ProjectLanguage = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  position: absolute;
  top: -25px;
  font-size: 14px;
  font-family: fontBold;
  color: #a4a4a4;
`;
export const ProjectContent = styled.div`
  h4 {
    font-weight: bold;
    font-family: fontBold;
    margin: 10px 0;
  }
  div {
    font-size: 15px;
    line-height: 22px;
    span {
      /* text-decoration: underline;
      text-decoration-thickness: 0.1px; */
      /* border-bottom: 0.5px solid; */
    }
  }
`;
// export const ProjectContent = styled.div``;
// export const ProjectContent = styled.div``;

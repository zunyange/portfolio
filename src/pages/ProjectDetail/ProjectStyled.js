import styled from 'styled-components';

export const ProjectDetail = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #e2cfcf;
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

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  video {
    width: 600px;
  } */
`;
export const Detail = styled.div`
  width: 900px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 3rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px;
  margin: 2rem auto;
  /* animation: 0.6s ease 0s 1 normal none running lnvfdh; */
`;
export const ProjectTitle = styled.div`
  font-family: fontBold;
  font-size: 50px;
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
`;

export const Term = styled.div`
  font-family: fontLight;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 22px;
`;

export const ProjectSkill = styled.div`
  span {
    display: inline-block;
    padding: 6px 10px;
    background-color: #eeeeee;
    border-radius: 5px;
    margin: 0px 7px 5px 0;
    font-size: 13px;
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
  }
`;

export const Description = styled.div`
  line-height: 27px;
  span {
    font-size: 18px;
    font-family: fontBold;
  }
`;
// export const ProjectImg = styled.div``;
// export const ProjectImg = styled.div``;
// export const ProjectImg = styled.div``;
// export const ProjectImg = styled.div``;

import styled from 'styled-components';

export const Resume = styled.div`
  /* height: 100vh; */
  width: 100%;
  /* background-color: #e6e6fa; */
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
  margin: 80px 0 40px 0;
`;

export const ResumeBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: ${({ one }) => (one ? '30px 20px 0 20px' : '25px 20px 0 20px')};
  border-bottom: ${({ three }) => (three ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ three }) => (three ? '30px' : '0')};
`;
export const ContentTitle = styled.div`
  width: 150px;
  font-size: 25px;
  font-family: fontEng;
`;

export const ContentBox = styled.div``;

export const Content = styled.div`
  display: flex;
  text-align: left;
  line-height: 27px;
  margin: ${({ title }) => (title ? '0 0 10px 0' : '0')};
  border-bottom: ${({ last }) => (last ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ last }) => (last ? '25px' : '0')};
`;

export const PotentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: ${({ one }) => (one ? '30px 20px 0 20px' : '25px 20px 0 20px')};
  border-bottom: ${({ three }) => (three ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ three }) => (three ? '30px' : '0')};
`;

export const PotentTitle = styled.div`
  width: 150px;
  font-size: 25px;
  font-family: fontEng;
`;

export const PotentBox = styled(ContentBox)``;

export const Potent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-family: fontBold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const CommitBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 27px;
  img {
    width: 300px;
  }
  div {
    /* font-size: 15px; */
    a {
      color: #4caf50;
      text-decoration: none;
      &:hover {
        color: #f35626;
        background-image: -webkit-linear-gradient(90deg, #4caf50, #d88cff);
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
  }
`;

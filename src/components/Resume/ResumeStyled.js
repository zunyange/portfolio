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
`;
export const ContentTitle = styled.div`
  width: 150px;
  font-size: ${({ three }) => (three ? '20px' : '25px')};
  font-family: ${({ three }) => (three ? 'fontCafe' : 'fontEng')};
`;

export const ContentBox = styled.div``;

export const Subtitle = styled.div`
  display: flex;
  font-family: fontBold;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  text-align: left;
  line-height: 27px;
  margin: ${({ title }) => (title ? '0 0 10px 0' : '0')};
  border-bottom: ${({ last }) => (last ? '0' : 'solid 1px #ccc')};
  padding-bottom: ${({ last }) => (last ? '0' : '25px')};
  a {
    color: #e29999;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #e29999;
      background-image: -webkit-linear-gradient(90deg, #e29999, #8b00ff);
      border-bottom: 0.5px solid;
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
`;

export const PotentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: ${({ one }) => (one ? '30px 20px 0 20px' : '25px 20px 0 20px')};
  border-bottom: ${({ last }) => (last ? 'solid 1px #ccc' : '0')};
  padding-bottom: ${({ last }) => (last ? '5px' : '0')};
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
`;

export const StudyWrap = styled(CommitBox)`
  border-bottom: ${({ last }) => (last ? '0' : 'solid 1px #ccc')};
`;

export const StudyBox = styled.div`
  width: 400px;
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
`;

export const StyledTr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  width: 380px;
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  font-weight: 600;
  padding: 4px;
  border-right: 1px solid #ccc;
`;

export const StyledTd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  width: 70px;
`;
export const StyledTdOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  width: 300px;
  border-right: 1px solid #ccc;
`;

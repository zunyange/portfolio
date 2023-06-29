import styled from 'styled-components';

export const Home = styled.div`
  height: 100vh;
  /* background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const IntroduceBox = styled.div``;
export const IntroduceWrap = styled.div`
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  //
  width: 100%;
  height: 100vh;
  p {
    font-size: 50px;
    font-weight: bold;
  }
`;
export const Introduce = styled.div`
  /* font-family: fontCafe; */
  font-size: 30px;
  width: 800px;
  line-height: 50px;
`;

export const SubIntroduce = styled.div`
  font-size: 20px;
  width: 600px;
  line-height: 30px;
  display: flex;
  padding-top: 20px;
  display: inline-block;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: ${({ first }) => (first ? '20px' : '22px')};
  color: ${({ first }) => (first ? '#ff9999' : '#3178c6')};
`;

export const IntroduceImg = styled.img`
  width: 230px;
  position: absolute;
  bottom: 0;
  right: 200px;
`;

// background-image: url('images/Kim/Maintop.png');
// background-repeat: no-repeat;
// background-size: cover;
// background-color: #e8f9ff;

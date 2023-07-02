import styled from 'styled-components';

export const About = styled.div`
  /* background-color: #e1efff; */
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
`;

export const SubIntroduce = styled.div`
  padding-top: 0px;
  font-size: 20px;
  width: 600px;
  line-height: 30px;
  display: flex;
  display: inline-block;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: ${({ first }) => (first ? '20px' : '22px')};
  color: #3178c6;
`;

export const IntroduceImg = styled.img`
  width: 230px;
  position: absolute;
  bottom: 0;
  right: 200px;
`;

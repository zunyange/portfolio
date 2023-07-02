import styled from 'styled-components';

export const About = styled.div`
  /* background-color: #e1efff; */
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
`;

export const Introduce = styled.div`
  font-size: 18px;
  width: 600px;
  line-height: 30px;
  display: flex;
  display: inline-block;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 21px;
  color: #3178c6;
`;

export const IntroduceImg = styled.img`
  width: 230px;
  position: absolute;
  bottom: 0;
  right: 200px;
`;

export const SkillWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Skill = styled.div`
  font-size: 30px;
`;
export const SkillBox = styled.div`
  display: flex;
  gap: 20px;
  width: 700px;
  margin-top: 20px;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
  /* overflow: hidden; */

  img {
    /* display: block; */
    width: 60px;
  }
`;

// export const SkillWrap = styled.div``;
// export const SkillWrap = styled.div``;

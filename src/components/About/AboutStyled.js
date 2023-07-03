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
  position: relative;
  display: grid;
  place-items: center;
  margin: auto;
  overflow: hidden;
  min-height: 100vh;
`;

export const Skill = styled.div`
  font-size: 30px;
`;

export const SkillBox = styled.div`
  display: flex;
  animation: scroll 10s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-300px);
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  perspective: 100px;

  img {
    /* display: block; */
    width: 60px;
    transition: transform 0.5s;
    &:hover {
      transform: translateZ(10px);
    }
  }
`;
// export const SkillWrap = styled.div``;
// export const SkillWrap = styled.div``;

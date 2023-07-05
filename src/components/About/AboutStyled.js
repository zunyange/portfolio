import styled, { keyframes } from 'styled-components';

export const About = styled.div`
  /* background-color: #e1efff; */
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
`;
export const Star = styled.img`
  width: 100px;
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 40px;
  margin-bottom: 20px;
`;

export const Aboutme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
`;

export const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* display: flex;
  justify-content: center;
  gap: 40px; */
  font-weight: bold;
  width: 1000px;
  padding: 20px;
  border-bottom: solid 1px #ccc;
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
    color: #f35626;
    background-image: -webkit-linear-gradient(90deg, #ff6596, #d88cff);
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
    -webkit-animation: hue 5s infinite linear;
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
  padding: 20px;
  border-bottom: solid 1px #ccc;
`;
export const SkillTitle = styled.div`
  width: 150px;
  font-size: 30px;
  font-family: fontEng;
`;

export const SkillBox = styled.div`
  display: flex;
  width: 500px;
  overflow-wrap: normal;
  /* overflow: hidden;
  white-space: nowrap; */
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
  }
  span {
    font-family: fontEng;
    /* color: #ccc; */
    font-size: 12px;
  }
`;

export const ExpWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  padding: 20px;
  border-bottom: solid 1px #ccc;
`;

export const ExpTitle = styled.div`
  width: 150px;
  font-size: 30px;
  font-family: fontEng;
`;

export const ExpBox = styled.div``;

export const Enterprise = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #a4a4a4;
  img {
    width: 100px;
  }
`;

export const ExpConent = styled.div`
  display: flex;
  text-align: left;
  line-height: 20px;
  padding: ${({ title }) => (title ? '5px 0 10px 0' : '3px 0')};
  font-family: ${({ title }) => (title ? 'fontBold' : 'fontBase')};
`;

// export const ExpWeb = styled.div`
//   display: flex;
//   &:hover {
//     cursor: pointer;
//   }
// `;
//////////////////

// export const Introduce = styled.div`
//   font-size: 18px;
//   width: 600px;
//   line-height: 30px;
//   display: flex;
//   display: inline-block;
// `;

// export const Span = styled.span`
//   font-weight: bold;
//   font-size: 21px;
//   color: #3178c6;
// `;

// export const IntroduceImg = styled.img`
//   width: 230px;
//   position: absolute;
//   bottom: 0;
//   right: 200px;
// `;

// export const SkillWrap = styled.div`
//   position: relative;
//   display: grid;
//   place-items: center;
//   margin: auto;
//   overflow: hidden;
//   /* min-height: 100vh; */
//   width: 70%;
// `;

// export const Skill = styled.div`
//   font-size: 30px;
// `;

// export const SkillBox = styled.div`
//   display: flex;
//   width: calc(60px * 16);
//   overflow: hidden;
//   animation: scroll 5s linear infinite;
//   /* animation-direction: alternate; */
//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(calc(-60px * 3));
//     }
//   }

//   &:hover {
//     animation-play-state: paused;
//   }
// `;

// export const ImgWrap = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   perspective: 100px;
//   height: 100px;
//   img {
//     /* display: block; */
//     width: 60px;
//     transition: transform 0.5s;
//     &:hover {
//       transform: translateZ(10px);
//     }
//   }
// `;
// // export const SkillWrap = styled.div``;
// // export const SkillWrap = styled.div``;

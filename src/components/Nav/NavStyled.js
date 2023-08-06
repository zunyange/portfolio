import styled from 'styled-components';

export const Nav = styled.div`
  position: relative;
`;

export const NavBox = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  z-index: 999;
`;

export const NavScroll = styled(NavBox)`
  backdrop-filter: blur(2px);
  background: hsla(0, 0%, 100%, 0.25);
`;

export const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  @media only screen and (max-width: 530px) {
    height: 70px;
  }
  @media only screen and (max-width: 310px) {
    height: 50px;
  }
`;

export const NavLogo = styled.img`
  height: 40px;
  @media only screen and (max-width: 1280px) {
    height: 34px;
  }
  @media only screen and (max-width: 530px) {
    height: 30px;
  }
  @media only screen and (max-width: 310px) {
    height: 25px;
  }
`;

export const NavContainer = styled.div`
  margin: 0 auto;
  width: 700px;
  display: flex;
  justify-content: space-around;
  font-family: 'fontEng';
  li {
    display: inline-block;
    font-size: 21px;
    color: #ffffff;
  }
  @media only screen and (max-width: 768px) {
    display: none;
    position: absolute;
  }
`;

export const NavScrollContainer = styled(NavContainer)`
  li {
    color: #000000;
  }
`;

export const NavLi = styled.li`
  cursor: pointer;
`;

export const NavLiWhite = styled(NavLi)`
  color: #ccc;
`;

export const Menubar = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    margin-left: 3%;
    cursor: pointer;
  }
  @media only screen and (max-width: 310px) {
    height: 25px;
  }
`;

export const NavToggle = styled.div`
  @media only screen and (max-width: 850px) {
    padding: 1.5% 0;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    border: 1px solid transparent;
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }
  @media only screen and (max-width: 480px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const NavToggleWrap = styled.div`
  li {
    list-style: none;
    line-height: 50px;
    font-size: 20px;
    font-family: fontBold;
    color: #e5e5e3;
    cursor: pointer;
    :hover {
      color: #000000;
    }
  }
  @media only screen and (max-width: 850px) {
    li {
      line-height: 42px;
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 480px) {
    li {
      line-height: 38px;
      font-size: 15px;
    }
  }
`;

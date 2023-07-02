import React, { useState, useEffect, useRef } from 'react';
import * as S from './NavStyled';
import '../../../src/styles.css';

const Nav = ({
  isShowMenu,
  setIsShowMenu,
  onMoveHome,
  onMoveAbout,
  onMoveProject,
  onMoveResume,
  onMoveContact,
}) => {
  // 마우스 스크롤시 Nav 색상변경
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef(null);
  const navToggleRef = useRef(null);
  // 외부 클릭시 토글 사라짐
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const handleClickOutside = event => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  //마우스 스크롤시 토글 사라짐
  useEffect(() => {
    const handleScroll = () => {
      const navToggle = navToggleRef.current;

      if (navToggle) {
        const navToggleRect = navToggle.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > navToggleRect.bottom) {
          navToggle.style.display = 'none';
        } else {
          navToggle.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={navRef}>
      <S.Nav>
        {scrollPosition < 100 ? (
          <S.NavBox>
            <S.NavWrap>
              <S.NavContainer>
                <S.NavLi onClick={onMoveHome}>Home</S.NavLi>
                <S.NavLi onClick={onMoveAbout}>About me</S.NavLi>
                <S.NavLi onClick={onMoveProject}>Project</S.NavLi>
                <S.NavLi onClick={onMoveResume}>Resume</S.NavLi>
                <S.NavLi onClick={onMoveContact}>Contact</S.NavLi>
              </S.NavContainer>
              <S.Menubar
                src="/images/menu.png"
                alt="Menu"
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            </S.NavWrap>
            {isShowMenu && (
              <S.NavToggle ref={navToggleRef}>
                <S.NavToggleWrap>
                  <li onClick={onMoveHome}>Home</li>
                  <li onClick={onMoveAbout}>About me</li>
                  <li onClick={onMoveProject}>Project</li>
                  <li onClick={onMoveResume}>Resume</li>
                  <li onClick={onMoveContact}>Contact</li>
                </S.NavToggleWrap>
              </S.NavToggle>
            )}
          </S.NavBox>
        ) : (
          <S.NavScroll>
            <S.NavWrap>
              <S.NavContainer>
                <S.NavLiWhite onClick={onMoveHome}>Home</S.NavLiWhite>
                <S.NavLiWhite onClick={onMoveAbout}>About me</S.NavLiWhite>
                <S.NavLiWhite onClick={onMoveProject}>Project</S.NavLiWhite>
                <S.NavLiWhite onClick={onMoveResume}>Resume</S.NavLiWhite>
                <S.NavLiWhite onClick={onMoveContact}>Contact</S.NavLiWhite>
              </S.NavContainer>
              <S.Menubar
                src="/images/menu.png"
                alt="Menu"
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            </S.NavWrap>
            {isShowMenu && (
              <S.NavToggle ref={navToggleRef}>
                <S.NavToggleWrap>
                  <li onClick={onMoveHome}>Home</li>
                  <li onClick={onMoveAbout}>About me</li>
                  <li onClick={onMoveProject}>Project</li>
                  <li onClick={onMoveResume}>Resume</li>
                  <li onClick={onMoveContact}>Contact</li>
                </S.NavToggleWrap>
              </S.NavToggle>
            )}
          </S.NavScroll>
        )}
      </S.Nav>
    </div>
  );
};

export default Nav;

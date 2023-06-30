import React, { useState } from 'react';
import './MainStyled.js';
import Nav from '../../components/Nav/Nav';
import Home from '../../pages/Main/Home/Home';
import About from '../../pages/Main/About/About';
import { Star } from '../../styles/common.js';

const Main = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const brand = React.useRef(null);
  const program = React.useRef(null);
  const franchisee = React.useRef(null);
  const findFranchisee = React.useRef(null);
  const business = React.useRef(null);

  const onMoveHome = () => {
    brand.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveAboutme = () => {
    program.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveProject = () => {
    franchisee.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveResume = () => {
    findFranchisee.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveContact = () => {
    business.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main">
      <Nav
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        onMoveHome={onMoveHome}
        onMoveAboutme={onMoveAboutme}
        onMoveProject={onMoveProject}
        onMoveResume={onMoveResume}
        onMoveContact={onMoveContact}
      />
      <Star />
      <Home />

      <About />
    </div>
  );
};

export default Main;

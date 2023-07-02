import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Home from '../../components/Home/Home.js';
import About from '../../components/About/About.js';
import { Star } from '../../styles/common.js';

const Main = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const home = React.useRef(null);
  const about = React.useRef(null);
  const project = React.useRef(null);
  const findFranchisee = React.useRef(null);
  const business = React.useRef(null);

  const onMoveHome = () => {
    home.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveAboutme = () => {
    about.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveProject = () => {
    project.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveResume = () => {
    findFranchisee.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveContact = () => {
    business.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
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
      <Home home={home} />
      <About about={about} />
    </div>
  );
};

export default Main;

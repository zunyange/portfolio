import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home.js';
import About from '../components/About/About.js';
import Project from '../components/Project/Project.js';
import Resume from '../components/Resume/Resume.js';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { Star } from '../styles/common.js';

const Main = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const home = React.useRef(null);
  const about = React.useRef(null);
  const project = React.useRef(null);
  const resume = React.useRef(null);
  const contact = React.useRef(null);

  const onMoveHome = () => {
    home.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveAbout = () => {
    about.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveProject = () => {
    project.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveResume = () => {
    resume.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveContact = () => {
    contact.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    const hasAlertBeenShown = localStorage.getItem('hasAlertBeenShown');

    if (
      userAgent.indexOf('chrome') === -1 &&
      userAgent.indexOf('mobile') !== -1 &&
      !hasAlertBeenShown
    ) {
      alert('본 페이지는 Chrome PC버전에 최적화되어 있습니다.');
      localStorage.setItem('hasAlertBeenShown', 'true');
    }
  }, []);

  // useEffect(() => {
  //   console.log('Inside useEffect');
  //   const isMobile = window.innerWidth <= 1024;
  //   const hasAlertBeenShown = localStorage.getItem('hasAlertBeenShown');

  //   if (isMobile && !hasAlertBeenShown) {
  //     alert('This page is optimized for Chrome PC version.');
  //     localStorage.setItem('hasAlertBeenShown', 'true');
  //   }
  // }, []);

  return (
    <div>
      <Nav
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        onMoveHome={onMoveHome}
        onMoveAbout={onMoveAbout}
        onMoveProject={onMoveProject}
        onMoveResume={onMoveResume}
        onMoveContact={onMoveContact}
      />
      <Star />
      <Home home={home} onMoveAbout={onMoveAbout} />
      <About about={about} />
      <Project project={project} />
      <Resume resume={resume} />
      <Contact contact={contact} />
      <Footer />
    </div>
  );
};

export default Main;

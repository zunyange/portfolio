import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Nav from '../components/Nav/Nav';
import ProjectDetail from './ProjectDetail/ProjectOne';

const Detail = () => {
  // const [isShowMenu, setIsShowMenu] = useState(false);
  // const navigate = useNavigate();
  // const about = React.useRef(null);
  // const project = React.useRef(null);
  // const resume = React.useRef(null);
  // const business = React.useRef(null);

  // const onMoveHome = () => {
  //   navigate('/');
  // };

  // const onMoveAbout = () => {
  //   navigate('/', { scrollOptions: { behavior: 'smooth', block: 'start' } });
  // };

  // const onMoveProject = () => {
  //   navigate('/');
  // };

  // const onMoveResume = () => {
  //   resume.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  // const onMoveContact = () => {
  //   business.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div>
      {/* <Nav
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        onMoveHome={onMoveHome}
        onMoveAbout={onMoveAbout}
        onMoveProject={onMoveProject}
        // onMoveResume={onMoveResume}
        // onMoveContact={onMoveContact}
      /> */}
      <ProjectDetail />
    </div>
  );
};

export default Detail;

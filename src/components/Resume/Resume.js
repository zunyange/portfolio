import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ResumeStyled.js';
import { Width } from '../../styles/common.js';

const Resume = ({ resume }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/project');
  };
  return (
    <S.Resume ref={resume}>
      <Width>
        <S.ResumeWrap>dd</S.ResumeWrap>
      </Width>
    </S.Resume>
  );
};

export default Resume;

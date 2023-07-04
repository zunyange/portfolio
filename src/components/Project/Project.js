import React, { useState, useEffect } from 'react';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const Project = ({ project }) => {
  return (
    <S.Project ref={project}>
      <Width>
        <S.ProjectWrap>
          <S.Title>Project</S.Title>
          <S.Projects>dd</S.Projects>
        </S.ProjectWrap>
      </Width>
    </S.Project>
  );
};

export default Project;

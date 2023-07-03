import React, { useState, useEffect } from 'react';
import * as S from './ProjectStyled.js';
import { Width } from '../../styles/common.js';

const Project = ({ project }) => {
  return (
    <S.Project ref={project}>
      <Width>dd</Width>
    </S.Project>
  );
};

export default Project;

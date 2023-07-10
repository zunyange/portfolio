import React from 'react';
import * as S from './ProjectDetailStyled.js';
import { Width } from '../../styles/common.js';

const ProjectDetail = () => {
  return (
    <S.ProjectDetail>
      <Width>
        <S.DetailWrap>
          <S.Title>
            개성을 중시하는 1020을 위한 트렌디하고 합리적인 가격대의 의류 서비스
          </S.Title>
          <video alt="signup" controls>
            <source
              src="https://github.com/wecode-bootcamp-korea/43-1st-200ok-frontend/assets/114667764/78d72fb3-c72d-4f6d-97f6-3af679b6db1e"
              type="video/mp4"
            />
          </video>
          읽고있는 책
        </S.DetailWrap>
      </Width>
    </S.ProjectDetail>
  );
};

export default ProjectDetail;

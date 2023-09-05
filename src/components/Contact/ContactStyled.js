import styled from 'styled-components';

export const Contact = styled.div`
  height: 30vh;
  width: 100%;
  background-color: #f5fbff;
  @media ${({ theme }) => theme.device.tablet} {
    height: auto;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    min-height: auto;
    ${Contact} {
      height: auto;
    }
  }
`;

export const Title = styled.div`
  font-family: fontEng;
  font-size: 40px;
  margin: 70px 0;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 70px;
  }
`;

export const ContactWrap = styled.div``;

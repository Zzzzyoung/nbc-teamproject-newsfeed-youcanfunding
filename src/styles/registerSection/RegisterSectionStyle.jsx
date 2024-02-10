import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
`;

const RegisterSectionTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const ProjectInfoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 20px;
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectInfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const ProjectInfoInput = styled.input`
  width: 15rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

const ProjectInfoTextArea = styled.textarea`
  width: 20rem;
  height: 5rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  resize: none;
`;

const ProjectFundingPeriodContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export {
  RegisterContainer,
  RegisterSectionTitle,
  ProjectInfoListContainer,
  ProjectInfoContainer,
  ProjectInfoTitle,
  ProjectInfoInput,
  ProjectInfoTextArea,
  ProjectFundingPeriodContainer
};

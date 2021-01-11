import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  border-radius: 0.7rem;
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c061f;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

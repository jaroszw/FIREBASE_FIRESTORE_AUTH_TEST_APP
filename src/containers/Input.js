import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 3.5rem;
  flex-direction: column;
  &:last-of-type {
    margin-bottom: 4.5rem;
  }
`;

const StyledInput = styled.input`
  padding: 1.2rem 2rem;
  width: 100%;
  background-color: #e1d89f;
  color: #374045;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 2rem;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />;
    </InputWrapper>
  );
};

export default Input;

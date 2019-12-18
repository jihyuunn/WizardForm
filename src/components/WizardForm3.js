import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FormContainer } from "./WizardForm1";

const leftToRight = keyframes`
  0% {
     margin-left: 30%;
  }
  50% {
    margin-left: 5%;
  }
  100% {
    margin-left: 0%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${leftToRight} 1s linear;
`;

const FormContainer2 = styled(FormContainer)``;

const WizardForm3 = ({ Contract, prevStep, nextStep }) => {
  return (
    <Container>
      <FormContainer2>
        <button onClick={() => Contract(true)}>Call Contract</button>
      </FormContainer2>
      <div>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </Container>
  );
};

export default WizardForm3;

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

const WizardForm2 = ({ LoanPurpose, nextStep, prevStep }) => {
  const purposeRef = useRef();
  const returnPlanRef = useRef();

  return (
    <Container>
      <FormContainer2>
        <label htmlFor="purpose">purpose</label>
        <input
          name="purpose"
          type="text"
          placeholder="Enter loan purpose"
          ref={purposeRef}
        />
        <label htmlFor="return_plan">return plan</label>
        <input
          name="return_plan"
          type="text"
          placeholder="Enter return plan"
          ref={returnPlanRef}
        />
      </FormContainer2>
      <div>
        <button onClick={prevStep}>Prev</button>
        <button
          onClick={() => {
            LoanPurpose(purposeRef.current.value, returnPlanRef.current.value);
            nextStep();
          }}
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default WizardForm2;

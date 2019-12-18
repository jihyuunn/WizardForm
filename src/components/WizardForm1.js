import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const leftToRight = keyframes`
  0% {
     margin-left: 30%;
  }
  80% {
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const WizardForm1 = ({
  amount,
  backload_term,
  returning_term,
  nextStep,
  LoaneeInfo
}) => {
  const amountRef = useRef(amount);
  const backloadRef = useRef(backload_term);
  const returningRef = useRef(returning_term);
  console.log(amount);

  const validation = async () => {
    if (!amountRef.current.value) {
      amountRef.current.focus()
    } else if (!backloadRef.current.value ||  backloadRef.current.value.length < 1 ) {
      backloadRef.current.focus()
    } else if (!returningRef.current.value ||  returningRef.current.value.length < 1) {
      returningRef.current.focus()
    } else {
      await LoaneeInfo(
        amountRef.current.value,
        backloadRef.current.value,
        returningRef.current.value
      );
      nextStep();
    }
  }

  return (
    <Container>
      <FormContainer>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          placeholder="Enter amount"
          ref={amountRef}
        />
        <label htmlFor="backload">backload</label>
        <input
          id="backload"
          type="number"
          placeholder="Enter backload term"
          ref={backloadRef}
        />
        <label htmlFor="returning">Returning</label>
        <input
          id="returning"
          type="number"
          placeholder="Enter returning term"
          ref={returningRef}
        />
      </FormContainer>
      <div>
        <button>Prev</button>
        <button
          onClick={() => {
            console.log(amountRef.current.value);
            validation(
              amountRef.current.value,
              backloadRef.current.value,
              returningRef.current.value
            );
          }}
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default WizardForm1;

import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Form1 from "../containers/Form1"
import Form2 from "../containers/Form2"
import Form3 from "../containers/Form3"
import Form4 from "../containers/Form4"
import LogInContainer from "../containers/LogInContainer"

const LoanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    h1 {
        font-size: 2.5rem;
    }
`

const Loan = ({ amount, call }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep+1)
        }
    }
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep-1)
        }
    }

    return (
        <LoanContainer>
            <h1>Loan Wizard Form <span role="img" aria-label="wizard">🧙‍♂️</span></h1>
            <h2>Step {currentStep}</h2>
            {currentStep === 0 ? <LogInContainer nextStep={nextStep}></LogInContainer> : null}
            {currentStep === 1 ? <Form1 nextStep={nextStep}></Form1> : null}
            {currentStep === 2 ? <Form2 prevStep={prevStep} nextStep={nextStep}></Form2> : null}
            {currentStep === 3 ? <Form3 prevStep={prevStep} nextStep={nextStep}></Form3> : null}
            {currentStep === 4 ? <Form4 prevStep={prevStep}></Form4> : null}
        </LoanContainer>
    )
}

export default Loan

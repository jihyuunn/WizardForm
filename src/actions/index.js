import { store } from "../index"
import Axios from 'axios'

export const LogIn = is_success => ({
    type: "LOG_IN",
    is_success
})

export const LoaneeInfo = (amount, backload_term, returning_term) => ({
    type: "ADD_LOANEE_INFO",
    amount,
    backload_term,
    returning_term
})

export const LoanPurpose = (purpose, plan) => ({
    type: "ADD_LOAN_PURPOSE",
    purpose,
    plan
})

export const Contract = call_contracted => ({
    type: "CALL_CONTRACT",
    call_contracted
})

export const Transcript = transcript_submitted => ({
    type: "SUBMIT_TRANSCRIPT",
    transcript_submitted
})

// export const Income = income_submitted => ({
//     type: "SUBMIT_INCOME",
//     income_submitted
// })

export const thunk_action_creator = (id, password) => {
    // store.dispatch(LogIn());
    return async function(dispatch, getState) {
        try {
            const response = await Axios.post(`${process.env.REACT_APP_BACKEND_HOST}/auth/sign_in`, {
                email: id, password: password
            })
            console.log(response)
            dispatch(LogIn(true))
        } catch (err) {
            console.log(err)
        }
    }
}
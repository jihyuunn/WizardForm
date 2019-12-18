const initialState = {
    is_logged_in: false,
    loan_info: {
        loan_amount: "1000",
        backload_term: 0,
        returning_term: 0,
    },
    purpose: {
        loan_purpose: "",
        return_plan: ""
    },
    call_contracted: false,
    transcript_submitted: false,
    income_submitted: false
}

export const LoanApply = (state=initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                is_logged_in: action.is_success
            }
        case "ADD_LOANEE_INFO":
            console.log(action)
            console.log(state)
            return {
                ...state,
                loan_info: {
                    loan_amount: action.amount,
                    backload_term: action.backload_term,
                    returning_term: action.returning_term
                }
            }
        case "ADD_LOAN_PURPOSE":
            console.log(action)
            console.log(state)
            return {
                ...state,
                purpose: {
                    loan_purpose: action.purpose,
                    return_plan: action.plan
                }
            }
        case "CALL_CONTRACT":
            console.log(action)
            console.log(state)
            return {
                ...state,
                call_contracted: true
            }
        case "SUBMIT_TRANSCRIPT":
            return {
                ...state,
                transcript_submitted: true
            }
        default:
            return state
    }
}


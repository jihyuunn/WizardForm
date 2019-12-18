import { LoaneeInfo, LoanPurpose, Contract, Transcript } from "./index"
import {LoanApply} from "../reducers/index"

describe('LoanApply test', () => {
    describe('actions', () => {
        it('should creat action', () => {
            const expectedActions = [
                {type: 'ADD_LOANEE_INFO'},
                {type: 'ADD_LOAN_PURPOSE'},
                {type: 'CALL_CONTRACT'},
                {type: 'SUBMIT_TRANSCRIPT'}
            ];
            const actions = [
                LoaneeInfo(),
                LoanPurpose(),
                Contract(),
                Transcript()
            ];
            expect(actions).toEqual(expectedActions)
        })
    });

    describe('reducer', () => {
        let state = LoanApply(undefined, {});
        it('should return initial state', () => {
            expect(state).toEqual({
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
            })
        });
        it('update loanee info', () => {
            state = LoanApply(state, { type: "ADD_LOANEE_INFO", amount: "20000", backload_term: 6, returning_term: 6})
            console.log(state)
            expect(state).toHaveProperty('loan_info.loan_amount', '20000')
            expect(state).toHaveProperty('loan_info.backload_term', 6)
            expect(state).toHaveProperty('loan_info.returning_term', 6)
        })
        it('update loan purpose', () => {
            state = LoanApply(state, { type: "ADD_LOAN_PURPOSE", purpose: "travel", plan:"part time job"})
            expect(state.purpose).toEqual({
                loan_purpose: "travel",
                return_plan: "part time job"
            })
        })
        it('update contract status', () => {
            state = LoanApply(state, { type: "CALL_CONTRACT" })
            expect(state.call_contracted).toEqual(true)
        })
        it('update document status', () => {
            state = LoanApply(state, { type: "SUBMIT_TRANSCRIPT"})
            console.log(state)
            expect(state.transcript_submitted).toEqual(true)
        })
    })
    
})
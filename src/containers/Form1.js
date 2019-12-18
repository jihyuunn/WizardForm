import { connect } from "react-redux";
import { LoaneeInfo } from "../actions";
import WizardForm1 from "../components/WizardForm1";

const mapStateToProps = ( state, ownProps ) => {
    console.log(state)
    return {
        amount: state.loan_info.loan_amount,
        backload_term: state.loan_info.backload_term,
        returning_term: state.loan_info.returning_term
    }
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  LoaneeInfo: (newAmount, newBackload, newReturning) =>
    dispatch(
      LoaneeInfo(
        newAmount, newBackload, newReturning
      )
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm1);

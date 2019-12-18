import { connect } from "react-redux";
import { LoanPurpose } from "../actions";
import WizardForm2 from "../components/WizardForm2";

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    purpose: state.purpose
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  LoanPurpose: (purpose, plan) => dispatch(LoanPurpose(purpose, plan))
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm2);

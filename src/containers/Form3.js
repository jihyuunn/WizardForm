import { connect } from "react-redux";
import { Contract } from "../actions";
import WizardForm3 from "../components/WizardForm3";

const mapStateToProps = ( state, ownProps ) => {
    console.log(state)
    return {
        contracted: state.call_contracted

    }
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    Contract: (contracted) =>
      dispatch(
        Contract(
          contracted
        )
      )
  });

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm3)
import { connect } from "react-redux";
import { Transcript } from "../actions";
import WizardForm4 from "../components/WizardForm4";

const mapStateToProps = ( state, ownProps ) => {
    console.log(state)
    return {
        submitted: state.transcript_submitted

    }
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    Transcript: (submitted) =>
      dispatch(
        Transcript(
          submitted
        )
      )
  });

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm4)
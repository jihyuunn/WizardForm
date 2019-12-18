import { connect } from "react-redux";
import { LogIn, thunk_action_creator } from "../actions";
import LogInForm from "../components/LogIn";

const mapStateToProps = ( state, ownProps ) => {
    console.log(state)
    return {

    }
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    LogIn: (is_success) =>
      dispatch(
        LogIn(
          is_success
        )
      ),
    LoggedIn: (id, psw) => 
        dispatch(thunk_action_creator(id, psw))
  });

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)
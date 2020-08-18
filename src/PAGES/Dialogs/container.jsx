import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/reducers/dialogs-reducer";
import Dialogs from ".";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        changePost: (newMessage) => {
            dispatch(updateNewMessageTextActionCreator(newMessage));
        },
    }
};

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

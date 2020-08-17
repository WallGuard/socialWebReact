import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/reducers/dialogs-reducer";
import Dialogs from ".";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

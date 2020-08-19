import React from 'react';
//import styles from './style.module.scss';


class ProfileStatus extends React.Component {

    statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status,
    };

    onStatusDoubleClick = () => {
        this.setState({
            editMode: true,
            status: this.props.status,
        })
        //SetState выполняется асинхронно!!!!
        //this.forceUpdate();
    };

    onStatusBlur = () => {
        this.props.updateStatus(this.state.status)
        this.setState({
            editMode: false,
        })
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    };

    render() {
        return <>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.onStatusDoubleClick} >{this.props.status || 'Enter Status'}</span>
                </div>
            :
                <div>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.onStatusBlur} value={this.state.status} />
                </div>
            }
        </>
    }
};

export default ProfileStatus;

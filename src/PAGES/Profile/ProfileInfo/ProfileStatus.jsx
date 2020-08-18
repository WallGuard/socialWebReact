import React from 'react';
//import styles from './style.module.scss';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    onStatusDoubleClick = () => {
        this.setState({
            editMode: true,
        })
        //SetState выполняется асинхронно!!!!
        //this.forceUpdate();
    };

    onStatusBlur = () => {
        this.setState({
            editMode: false,
        })
    };

    render() {
        return <>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.onStatusDoubleClick} >{this.props.status}</span>
                </div>
            :
                <div>
                    <input autoFocus onBlur={this.onStatusBlur} value={this.props.status}></input>
                </div>
            }
        </>
    }
};

export default ProfileStatus;

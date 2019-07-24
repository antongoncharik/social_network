import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    disactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.statusBlock}>
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={this.disactivateEditMode.bind(this)}
                           value={this.props.status}/>
                </div>
                }
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
            </div>)
    }
}

export default ProfileStatus;

import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const disActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div className={s.statusBlock}>
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={disActivateEditMode}
                       value={status}
                       onChange={onStatusChange}/>
            </div>
            }
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
            }
        </div>)
}

export default ProfileStatusHooks;

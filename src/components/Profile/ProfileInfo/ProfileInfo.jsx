import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://kipmu.ru/wp-content/uploads/svgry.jpg'></img>
      </div>
      <div className={s.profileInfoBlock}>
        AVA and description
      </div>
    </div>)
}

export default ProfileInfo;

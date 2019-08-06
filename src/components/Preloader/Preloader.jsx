import React from 'react';
import s from './Preloader.module.css';
import preloaderSVG from '../../common/resource/svg/Preloader.svg';

const Preloader = (props) => {
    return (
        <div className={s.preloaderBlock}>
            <div>Loading...</div>
            <img src={preloaderSVG}></img>
            <div>Please, wait</div>
        </div>
    )
}

export default Preloader;

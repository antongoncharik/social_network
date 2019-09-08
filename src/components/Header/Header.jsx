import React from 'react';
import s from './Header.module.css';
import logo from '../../common/resource/img/logo.jpg';

const Header = ({logout, isAuth, login}) => {
    const logoutButton = () => {
        logout();
    }

    return (
        <header className={s.headerBlock}>
            <img
                src={logo}>

            </img>
            <div className={s.loginBlock}>
                {isAuth ? <div onClick={logoutButton}>{login}</div> : 'unauthorized'}
            </div>
        </header>
    )
}

export default Header;

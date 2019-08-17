import React from 'react';
import s from './Header.module.css';
import logo from '../../common/resource/img/logo.jpg';

const Header = (props) => {
    const logout = () => {
        props.logout();
    }

    return (
        <header className={s.headerBlock}>
            <img
                src={logo}>

            </img>
            <div className={s.loginBlock}>
                {props.isAuth ? <button onClick={logout}>{props.login} logout</button> : 'unauthorized'}
            </div>
        </header>
    )
}

export default Header;

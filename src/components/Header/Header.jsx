import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.headerBlock}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfqgnIfB09UoLZO2hU92G3sLC9_EhIVMygSxZ0Mga8pnwxfMAxw'></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : 'Login'}
            </div>
        </header>
    )
}

export default Header;

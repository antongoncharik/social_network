import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  return (
    <nav className={s.navBlock}>
      <div className={s.navLinkBlock}>
        <NavLink to='/profile' activeClassName={s.activeLinkBlock}>Profile</NavLink>
      </div>
      <div className={s.navLinkBlock}>
        <NavLink to='/dialogs' activeClassName={s.activeLinkBlock}>Messages</NavLink>
      </div>
      <div className={s.navLinkBlock}>
        <NavLink to='/news' activeClassName={s.activeLinkBlock}>News</NavLink>
      </div>
      <div className={s.navLinkBlock}>
        <NavLink to='/music' activeClassName={s.activeLinkBlock}>Music</NavLink>
      </div>
      <div className={s.navLinkBlock}>
        <NavLink to='/settings' activeClassName={s.activeLinkBlock}>Settings</NavLink>
      </div>
      <div>
        <Friends friends={props.sidebar.friends}/>
      </div>
    </nav>)
}

export default Navbar;

import React from "react";
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
function Navigation() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div >
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/profile'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/profile'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/profile'>Settings</NavLink>
            </div>

        </nav>
    )
}

export default Navigation;
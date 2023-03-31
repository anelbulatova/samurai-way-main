import React from "react";
import s from './Navigation.module.css'
function Navigation() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile'>Profile</a>
            </div >
            <div className={s.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={s.item}>
                <a href='/profile'>Music</a>
            </div>
            <div className={s.item}>
                <a href='/profile'>News</a>
            </div>
            <div className={s.item}>
                <a href='/profile'>Settings</a>
            </div>

        </nav>
    )
}

export default Navigation;
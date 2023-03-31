import React from "react";
import classes from './Header.module.css'
const a = 'a'
function Header() {
    return (
        <header className={classes.header}>
            <img src='https://www.woodstock-guitars.com/wp-content/uploads/2017/03/new-logo-small.png'/>
        </header>
    )
}

export default Header;
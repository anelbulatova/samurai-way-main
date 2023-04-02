import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + '' + s.active}>
                      <NavLink  to='/dialogs/1'>Anelya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Armin</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Azra</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Antalya</NavLink>
                </div>
            </div >
            <div className={s.messages}>
                <div className='message'>Hi</div>
                <div className='message'>How are you</div>
                <div className='message'>Fine,thanks</div>
            </div>
        </div>


    )
}

export default Dialogs;
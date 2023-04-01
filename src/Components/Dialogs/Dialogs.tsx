import React from "react";
import s from './Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + '' + s.active}>
                      Anelya
                </div>
                <div className={s.dialog}>
                    Armin
                </div>
                <div className={s.dialog}>
                    Azra
                </div>
                <div className={s.dialog}>
                    Antalya
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
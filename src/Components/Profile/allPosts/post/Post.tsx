import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message:string
    likesCount: string
}


function Post(props: PostPropsType) {

    return (
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgQl9kjvut_89gY6_ThO8hbaoeZQm13fpJg&usqp=CAU'/>
                {props.message}
                <div>
                <span> like {props.likesCount}</span>
                </div>
            </div>
            )
            }
            export default Post;
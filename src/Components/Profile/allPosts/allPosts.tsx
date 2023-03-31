import React from "react";
import s  from './allPosts.module.css'
import Post from "./post/Post";

function AllPosts() {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                    <div className={s.posts}>
                    <Post message='Hi, how are you?' likesCount='0'/>
                    <Post message='It is my first post'  likesCount='03'/>
                    <Post message='I am fine' likesCount='04'/>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AllPosts;
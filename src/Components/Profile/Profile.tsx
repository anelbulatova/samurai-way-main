import React from "react";
import classes from './Profile.module.css'
import AllPosts from "./allPosts/allPosts";


function Profile() {
    return (
        <div>
            <div>
                <img
                    src='https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg'/>
            </div>
            <div> avatar+description</div>
            <AllPosts/>
        </div>
    )
}

export default Profile;
import React from 'react';
import playlist from "../images/playlist.jpg"
import "./Posts.css"
const Posts = () => {
    return (
        <div className="post">
            <img className="playlistimg" src={playlist}/>
            <a href="https://www.pinterest.com/pin/978336719037191248/">Ссылка на пост</a>

        </div>
    );
};

export default Posts;
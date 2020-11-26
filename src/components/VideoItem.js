import React from 'react';
import './VideoItem.css';
const VideoItem = ({onVideoSelect, video}) => {
    return (
         // to check for the properties inside the object -- check network console tab- preview in 
         //onVideoSelect prop contains the same function passed from App to VideoList4
         //when user clicks -- call the callback function and pass the video that has been selected
        <div onClick={() => onVideoSelect(video)}  className='video-item item'>
            <img className ='ui image' src = {video.snippet.thumbnails.medium.url} alt ={video.snippet.title}/>
            <div className="content">
                <div className='header'>
                    {video.snippet.title}   
                </div>
            </div>

        </div>
    );
}

export default VideoItem;
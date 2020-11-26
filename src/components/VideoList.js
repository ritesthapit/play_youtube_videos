import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({onVideoSelect, videos}) => {
    //videos == contains the array of OBJECTS (video list) that we render out as html on to the screen
    //child component VideoItem will be rendered for every item in the videos sent from the parent App.js
    //pass the property that has callback to each of videoitems
    const renderedList = videos.map((video) => {
        // make sure effectively rerender everytime using key property
        return <VideoItem key ={video.id.videoId} onVideoSelect = {onVideoSelect} video={video}/>
    })
    return (
    <div className='ui relaxed divided list'>
        {renderedList}
    </div>)
}

export default VideoList;
import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div onClick={()=> onVideoSelect(video)}className="video-item">
            <div className="ui relaxed divided list">
                <div className="item">
                    <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}></img>
                    <div className="content">
                        <div className="header">{video.snippet.title}</div>
                        <div className="description"></div>
                    </div>
                </div>
            </div>    
        </div>
    );

}


export default VideoItem; 
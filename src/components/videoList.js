import React from 'react'
import VideoItem from './videoItem';

const VideoList=(props)=>{
    const videos= props.videos;
    const onVideoSelected=props.onVideoSelected;
   const renderList= videos.map((video=>{
        return <VideoItem key={video.id.videoId} onVideoSelected ={onVideoSelected} video={video}/>
    }))
    return (
        <div className="ui relaxed divided list" >
          {renderList}
        </div>
    )
}

export default VideoList


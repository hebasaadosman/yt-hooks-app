  import React from 'react'
  import "./videoItem.css"
  const VideoItem=({video,onVideoSelected}) =>{
      
      return (
          <div className="video-item item"  key={video.id.videoId} onClick={()=>onVideoSelected(video)}>
              <img className="ui image" 
              alt={video.snippet.title} 
              src={video.snippet.thumbnails.medium.url}/>
              <div className="content">
                  <div className="header">{video.snippet.title}
                  </div>
               </div>
          </div>
      )
  }
  
  export default VideoItem
            
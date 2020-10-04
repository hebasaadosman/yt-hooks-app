import React,{useState,useEffect} from 'react';
import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetails from './videoDetails'
import useVideos from '../Hooks/useVideo'
import useSelect from '../Hooks/useSelect'
const App=()=>{

  const [videos, search] =useVideos('flowers');
  const [selectedVideo,onSelectedVideo] =useSelect(videos);
  return (
    <div className="ui container">
     <SearchBar onSubmit={search}/>
     <div className="ui grid"> 
     <div className="ui row"> 
      <div className="eleven wide column">
      <VideoDetails video={selectedVideo} />
      </div>
      <div className="five wide column">
      <VideoList onVideoSelected={onSelectedVideo} videos={videos}/>
     </div>
     </div>
     </div>
    </div>
  )
}
export default App


import {useState,useEffect} from 'react';

const useSelect =(videos)=>{
    const [selectedVideo, setSelectedVideo] = useState(null);
   const onSelectedVideo= (video)=>{setSelectedVideo(video)}
    useEffect(() => {
        setSelectedVideo(videos[0])
        }, [videos])
      return [selectedVideo,onSelectedVideo];
};
export default  useSelect
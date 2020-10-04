import {useState,useEffect} from 'react';
import Youtube from '../api/Youtube';

const useVideos =(defaultSearchTerm)=>{
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        search(defaultSearchTerm);
      },[])
      const search=async (query)=>{
        const response = await  Youtube.get('/search',{
          params:{
          q:query
        }
        });
        setVideos(response.data.items)
      }
      return [videos,search];
};
export default  useVideos
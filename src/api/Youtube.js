import axios from 'axios';

const KEY="AIzaSyC9hbL9qnNcBEjpSJ8ysH5iUNxM_iCvVk4";

export default axios.create ({
  baseURL:"https://www.googleapis.com/youtube/v3",
  params:{
      part:'snippet',
      maxResults:5,
      key:KEY
  }
});


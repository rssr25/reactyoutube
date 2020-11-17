import axios from 'axios'

const KEY = "AIzaSyDMt7j6tLXHsKs1AqR-Ya6hc-EM1NT9E5s"

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
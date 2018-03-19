import { YOUTUBE_KEY } from '../config/youtubekey'
import { 
  FETCH_VIDEOS_ATTEMPT, 
  FETCH_VIDEOS_SUCCESS, 
  FETCH_VIDEOS_FAIL,
  SELECTED_VIDEO, 
} from '../constants'
import axios from 'axios';


export function getVideos(query, initial) {
    const fixed = 'https://www.googleapis.com/youtube/v3/search';
    let url = fixed + '?part=snippet' + '&maxResults=5' + '&q='+ query + '&key='+ YOUTUBE_KEY;

      return async function(dispatch){
        try{
          dispatch({
            type: FETCH_VIDEOS_ATTEMPT,
        });
          const body = await fetch(url);
          const resp = await body.json()
          dispatch({
            type: FETCH_VIDEOS_SUCCESS,
            payload: resp,
        })
        dispatch({type: SELECTED_VIDEO, payload:resp.items[0]})
      }catch(e){
          dispatch({
            type: FETCH_VIDEOS_FAIL,
            payload: e
          });
        }
      };


  };
  export function selectedVideo(video){
    return{
      type: SELECTED_VIDEO,
      payload: video,
    }

  };
  //   return function(dispatch){
  //     dispatch({
  //       type: FETCH_VIDEOS_ATTEMPT,
  //     })
  //     axios.get(url).then((resp)=> {
  //       dispatch({
  //         type: FETCH_VIDEOS_SUCCESS,
  //         payload: resp.data,
  //       })
  //     }).catch(e=>{
  //         dispatch({
  //           type: FETCH_VIDEOS_FAIL,
  //           payload: e
  //         })
  //       });
       
  //   };


  // };
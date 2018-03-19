import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


const VideoPlayer = ({selectVideo}) => {
  console.log(selectVideo)
  if(Object.keys(selectVideo).length) {
    var selectedVideoURL = "https://www.youtube.com/embed/" + selectVideo.id.videoId
  }

  return (
    <div className="videoPlayer"> 
      <div className="player embed-responsive embed-responsive-16by9">
        <iframe 
          className="embed-responsive-item" 
          src={selectedVideoURL}
          allowFullScreen
        />
      </div>
      <div className="video-details">
        <h4 className="video-title">
        {Object.keys(selectVideo).length ? selectVideo.snippet.title : ""}
        </h4>
        <p className="video-description">
        {Object.keys(selectVideo).length ? selectVideo.snippet.description : ""}
        </p>
      </div>
    </div>
  )
};

VideoPlayer.propTypes = {
  // selectedVideo: PropTypes.object.isRequired,
}
function mapStateToProps({selectVideo}){
  return{
    selectVideo
  }
}

export default connect(mapStateToProps)(VideoPlayer) 




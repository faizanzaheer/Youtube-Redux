import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { selectedVideo } from '../actions'

import VideoListEntry from './VideoListEntry';

class VideoList extends React.Component {

  createList() {
    let { videoList, selectedVideo } = this.props;

    return videoList.map((item, i) => {
      return <VideoListEntry key={i} video={item} handleSelectedVideo={selectedVideo}/>
    });
  }

  render() {
    let { videoList, isloading, error } = this.props;

    return (
      <div className="videoList"> 
         {isloading ? <div>Loading Videos...</div> : error ?<div>{error.message}</div> : this.createList() }
      </div>
    )
  }
};

VideoList.propTypes = {
  videoList: PropTypes.array.isRequired,
  handleSelectedVideo: PropTypes.func.isRequired,
}

function mapStateToProps({videoList}){
  return {
    videoList: videoList.videos,
    isLoading: videoList.isloading,
    error: videoList.error,
  }
}
export default connect(mapStateToProps, {selectedVideo})(VideoList);
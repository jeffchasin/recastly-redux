import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     handleSearchInputChange: (searchTerm) => dispatch(handleSearchChange(searchTerm))
  //   }
  // };

  const mapStateToProps = state => {
    return {
      vid: state.video
    };
  };

  return connect(mapStateToProps, null)(VideoPlayer);


};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.


export default VideoPlayerContainer();




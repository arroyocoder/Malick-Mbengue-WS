import React from 'react';
import 'tachyons';

import pic02 from '../images/pic02.jpg'

class VideoGalery extends React.Component {

  render() {
    return (<div className="grow">

      <div className="iframe-hide">

        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8p7VL_VEoxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

      </div>

    </div>)
  }
}

export default VideoGalery;

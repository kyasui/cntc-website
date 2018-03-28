import React, { Component } from 'react';
import { Link, withPrefix } from "gatsby-link";
import ReactDOM from 'react-dom';

class Video extends React.Component {
  state = {
    shouldShow: false,
  }

  componentDidMount() {
    this.video.oncanplay = () => {
      this.video.play();
      this.setState({
        shouldShow: true
      });
    };
  }

  render() {
    return(
      <div className={"aspect-ratio--object z-1 overflow-hidden relative splash-video"  + (this.state.shouldShow ? ' is-active' : '')}>
        <div className="bg-black-40 absolute--fill absolute z-2"></div>
        <video
          ref={node => this.video = node}
          className="of-cover z-1 relative"
          type="video/mp4"
          playsInline
          autoPlay
          muted
          loop>
          <source src={withPrefix('/video/landing.mp4')} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Video;

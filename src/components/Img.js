import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Img extends React.Component {
  state = {
    shouldShow: false,
  }

  componentDidMount() {
    let imageObject = new Image();
    imageObject.src = this.props.imageSrc;
    imageObject.onload = () => {
      this.setState({
        shouldShow: true,
        imageSrc: this.props.imageSrc,
      });
    }
  }

  render() {
    if (this.props.isBg) {
      return (
        <div className={"aspect-ratio aspect-ratio--img img-preload bg-center bg-no-repeat mb3" + (this.state.shouldShow ? ' is-loaded' : '')}>
          <div
            className="aspect-ratio--object cover"
            style={{
              backgroundImage: `url(${this.state.imageSrc})`
            }}></div>
        </div>
      );
    } else {
      return (
        <img className={"img-preload" + (this.state.shouldShow ? ' is-loaded' : '') + ` ${this.props.className}`} src={this.state.imageSrc} />
      );
    }
  }
}

export default Img;

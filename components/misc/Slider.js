import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const {
  String,
  Number
} = PropTypes;

export default class Slider extends Component {

  static propTypes = {
    className: String,
    defaultValue: Number,
    max: Number,
    min: Number
  };

  static defaultProps = {
    min: 16,
    max: 28
  };

  state = {
    value: this.props.defaultValue || this.props.min,
    perc: this.props.defaultValue ? this.props.defaultValue / this.props.max * 100 : 0
  };

  handleTouch = (event) => {
    let offset = this.refs.slider.getBoundingClientRect();
    let touch = event.touches.item(0);
    let perc = (offset.bottom - touch.pageY) / offset.height;

    if (perc > 1) {
      perc = 1;
    } else if (perc < 0) {
      perc = 0;
    }

    let value = perc * (this.props.max - this.props.min) + this.props.min;


    this.setState({ perc: perc * 100, value: Math.floor(value) });
  };

  render () {
    const classes = classNames('slider', this.props.className);
    return (
      <div className={ classes } ref="slider" onTouchStart={ this.handleTouch } onTouchMove={ this.handleTouch }>
        <div className="slider_zone" />
        <div className="slider_bar" style={ { height: `${this.state.perc}%` } } />
        <div className="slider_handle"
          style={ { bottom: `${this.state.perc}%` } }>
          { this.state.value }&#x00B0;
        </div>
      </div>
    );
  }

}

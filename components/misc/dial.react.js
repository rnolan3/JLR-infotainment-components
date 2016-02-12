import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const max = Math.max;
const min = Math.min;

export default class Dial extends Component {
  static propTypes = {
    className: PropTypes.string,
    max: PropTypes.number,
    maxArc: PropTypes.number,
    min: PropTypes.number
  };

  static defaultProps = {
    max: 60,
    min: 0,
    maxArc: 180
  };

  state = {
    value: 0
  };

  PI2 = 2 * Math.PI;
  x = 0;
  y = 0;
  w2 = 0;
  angleArc = 180;

  handleMove = (event) => {
    const offset = this.refs.dial.getBoundingClientRect();
    this.x = offset.left;
    this.y = offset.top;
    this.w2 = offset.width / 2;

    let touch = event.touches.item(0);
    let v = this.xy2val(touch.pageX, touch.pageY);
    this.setState({ value: Math.ceil(this.props.max * v), deg: v * this.props.maxArc });
  };

  xy2val = (x, y) => {
    let a, ret;

    a = Math.atan2(
      x - (this.x + this.w2),
      - (y - this.y - this.w2)
    );
    console.log(this.angleArc)

    if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
      // if isset angleArc option, set to min if .5 under min
      a = 0;
    } else if (a < 0) {
      a += this.PI2;
    }

    ret = (a * (this.props.max - this.props.min) / this.angleArc) + this.props.min;
    console.log('ret', ret);
    ret = max(min(ret, 1), this.props.min);
    return ret;
  };

  render () {
    const { className, max } = this.props;
    const { value, deg } = this.state;
    const classes = classNames('dial', className);

    return (
      <div className={ classes } onTouchMove={ this.handleMove } ref="dial">
        <div className="dial_ring" style={ { transform: `rotate(${ deg }deg)` } } />
        <h1>{ Math.floor(value) }</h1>
      </div>
    );
  }
}

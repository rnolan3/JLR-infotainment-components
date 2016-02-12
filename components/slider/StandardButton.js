import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from './StandardButton.scss';

let cx = classNames.bind(styles);

export default class StardButton extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string
  };

  render () {
    const { active, children, className, value, onClick } = this.props;
    const classes = cx({
      base: true,
      on: active
    }, className);

    return (
      <button className={ classes } onClick={ onClick }>
        { children || value  }
      </button>
    );
  }
}

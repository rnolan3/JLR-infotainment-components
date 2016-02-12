import React from 'react'

import classNames from 'classnames/bind'
import styles from './SliderRail.scss'

let cx = classNames.bind(styles)

const SliderRail = ({ direction }) => {
  const classes = cx({
    rail: true,
    left: direction !== 'right',
    right: direction === 'right'
  })

  return (<div className={ classes } />)
}

export default SliderRail

import React from 'react'
import SliderHandle from './SliderHandle'

import classNames from 'classnames/bind'
import styles from './SliderBar.scss'

let cx = classNames.bind(styles)

const SliderBar = ({ direction, dragging, perc, value }) => {
  const heatOpacity = dragging ? perc / 100 : 0
  const heatStyle = { opacity: heatOpacity }

  const barClasses = cx({
    bar: true,
    left: direction !== 'right',
    right: direction === 'right'
  })

  return (
    <div className={ barClasses } style={ { height: `${ perc }%` } }>
      <div className={ styles.heatBar } style={ heatStyle } />
      <div className={ styles.barTrim } />
      <SliderHandle
        direction={ direction }
        perc={ perc }
        value={ value } />
    </div>
  )
}

export default SliderBar

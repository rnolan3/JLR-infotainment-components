import React from 'react'

import classNames from 'classnames/bind'
import styles from './SliderHandle.scss'

let cx = classNames.bind(styles)
let degSymbol = '\u00B0'

const SliderHandle = ({ direction, perc, value }) => {
  const handleClasses = cx({
    handle: true,
    left: direction !== 'right',
    right: direction === 'right'
  })

  const labelClasses = cx({
    label: true,
    atBottom: perc <= 15,
    atTop: perc >= 85,
    left: direction !== 'right',
    right: direction === 'right'
  })

  return (
    <div className={ handleClasses }>
      <div className={ labelClasses }>
        { value }{ degSymbol }
      </div>
    </div>
  )
}

export default SliderHandle

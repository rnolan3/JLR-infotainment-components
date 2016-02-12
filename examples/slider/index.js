import React from 'react'
import ReactDOM from 'react-dom'

import Slider from '../../components/slider/Slider'

import styles from './styles.scss'

ReactDOM.render(<div>
  <Slider
    className={ styles.colLeft }
    defaultValue="12"
    direction="left" />
  <Slider
    className={ styles.colRight }
    defaultValue="18"
    direction="right" />
</div>, document.getElementById('app'))

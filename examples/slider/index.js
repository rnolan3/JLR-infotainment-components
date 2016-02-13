/* eslint no-console: 0 */
import React from 'react'
import ReactDOM from 'react-dom'

import Slider from '../../components/slider/Slider'

import styles from './styles.scss'

function consoleValue (value) {
  console.log('slider value:', value)
}

ReactDOM.render(<div>
  <Slider
    className={ styles.colLeft }
    defaultValue="12"
    direction="left"
    label="L" />
  <Slider
    className={ styles.colRight }
    defaultValue="18"
    direction="right"
    label="R"
    onChange={ consoleValue } />
</div>, document.getElementById('app'))

import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import router from './router'
import store from './store'

render(
  <Provider { ...store }>
    { router }
  </Provider>,
  document.getElementById('root')
)

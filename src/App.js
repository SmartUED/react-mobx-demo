import React, { Component } from 'react'
import DevTool from 'mobx-react-devtools'
import style from './app.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <header className={ style.header }>Mobx Demo</header>
        <div className={ style.content }>
          { this.props.children }
        </div>
        <footer className={ style.footer }>© 2016 Gasper Duan</footer>
        { process.env.NODE_ENV === 'development' ? <DevTool /> : null }
      </div>
    )
  }
}

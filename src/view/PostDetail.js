import React, { Component } from 'react'
import { observer } from 'mobx-react'
import style from './post-detail.css'

@observer(['PostDetailModel'])
export default class PostDetail extends Component {
  componentDidMount () {
    const { PostDetailModel, params: { id } } = this.props

    PostDetailModel.fetchData(id)
  }

  render () {
    const { title, content, loading } = this.props.PostDetailModel

    return (
      <div>
        { loading ? <div>Loading...</div> : null }
        <h1>{ title }</h1>
        <div className={ style.markdown } dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    )
  }
}

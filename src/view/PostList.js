import React, { Component } from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'

@observer(['PostListModel'])
export default class PostList extends Component {
  componentDidMount () {
    const { PostListModel } = this.props

    PostListModel.fetchData()
  }

  render () {
    const { list, loading } = this.props.PostListModel

    return (
      <div>
        { loading ? <div>Loading...</div> : null }
        <ul>
          {
            list.map(item => {
              return (
                <li key={ item.id }>
                  <Link to={ `/posts/${item.id}` }>{ item.title }</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

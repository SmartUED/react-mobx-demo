import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import App from './App'
import PostList from './view/PostList'
import PostDetail from './view/PostDetail'

export default (
  <Router>
    <Route path="/" component={ App }>
      <IndexRedirect to="posts" />
      <Route path="posts" component={ PostList } />
      <Route path="posts/:id" component={ PostDetail } />
    </Route>
  </Router>
)

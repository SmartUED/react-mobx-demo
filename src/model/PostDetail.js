import { observable, action } from 'mobx'

export default class {
  @observable title = ''
  @observable content = ''
  @observable loading = false

  @action fetchData (id) {
    this.loading = true
    return fetch(`https://cnodejs.org/api/v1/topic/${id}`)
              .then(res => res.json())
              .then(action('fetch data done', data => {
                this.title = data.data.title
                this.content = data.data.content
                this.loading = false
              }))
  }
}

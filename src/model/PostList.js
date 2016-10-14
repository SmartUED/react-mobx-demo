import { observable, action } from 'mobx'

export default class {
  @observable list = []
  @observable loading = false

  @action fetchData () {
    this.loading = true
    return fetch(`https://cnodejs.org/api/v1/topics`)
            .then(res => res.json())
            .then(action('fetch data done', data => {
              this.list = data.data
              this.loading = false
            }))
  }
}

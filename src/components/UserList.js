import React, {Component} from 'react'
import helpers from '../helpers'
import UserItem from './UserItem'
import Pagination from './Pagination'

class UserList extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      currentPage: 1,
      limit: 4,
      userTotal: 0
    }
  }

  componentDidMount() {
    this.loadUsers()
    this.getAllUsers().then((json) => {
      this.setState({userTotal: json.length})
    })
  }

  loadUsers() {
    this.getUsers().then((json) => {
      this.setState({users: json})
    })
  }

  changePage = (pageNumber) => {
    this.setState({currentPage: pageNumber}, this.loadUsers)
  }

  async getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users?_limit=' + this.state.limit + '&_page=' + this.state.currentPage
    return helpers.sendRequest(url)
  }

  async getAllUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    return helpers.sendRequest(url)
  }

  render() {
    return (
      <div>
        <ul className="users">{
          this.state.users.map((user, i) => (
            <UserItem key={user.id} id={user.id} name={user.name}/>
          ))
        }
        </ul>
        <Pagination limit={this.state.limit} onPageChange={this.changePage} itemNumber={this.state.userTotal}/>
      </div>
    )
  }
}

export default UserList
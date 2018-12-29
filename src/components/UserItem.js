import React, {Component} from 'react'
import PostList from './PostList'
import './UserItem.css'


class UserItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            name: this.props.name,
            displayPosts: false
        }
    }

    switchPostsVisibility(){
        this.setState((prevState) => {
            return {
                displayPosts: !prevState.displayPosts
            }
        })
    }

    render() {
        return (
            <li className="user">
                <h3 onClick={this.switchPostsVisibility.bind(this)}>{this.state.name}</h3>
                {this.state.displayPosts ? <PostList userId={this.state.id}/> : null}
            </li>
        )
    }
}

export default UserItem
import React, {Component} from 'react'
import helpers from "../helpers"
import PostItem from './PostItem'

class PostList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            userId: this.props.userId
        }
    }

    componentDidMount() {
        this.getPostsByUser().then(json => this.setState({posts: json}))
    }

    async getPostsByUser() {
        return helpers.sendRequest('https://jsonplaceholder.typicode.com/posts?userId=' + this.state.userId)
    }

    render() {
        return (
            <ul className="posts">{
                this.state.posts.map((post, i) => (
                    <PostItem key={post.id} id={post.id} title={post.title} body={post.body}/>
                ))
            }
            </ul>
        )
    }
}

export default PostList
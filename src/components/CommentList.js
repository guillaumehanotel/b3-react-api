import React, {Component} from 'react'
import helpers from "../helpers"
import './CommentList.css'

class CommentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            postId: this.props.postId
        }
    }

    componentDidMount() {
        this.getCommentsByPost().then(json => this.setState({comments: json}))
    }

    async getCommentsByPost() {
        return helpers.sendRequest('https://jsonplaceholder.typicode.com/comments?postId=' + this.state.postId)
    }

    render() {
        return (
            <ul className="comments">{
                this.state.comments.map((comment, i) => (
                    <li key={i}>
                        <p className="comment-author">{comment.name}</p>
                        <p className="comment-content">{comment.body}</p>
                    </li>
                ))
            }
            </ul>
        )
    }

}

export default CommentList
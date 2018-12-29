import React, {Component} from 'react'
import './PostContent.css'
import CommentList from './CommentList'

class PostContent extends Component {

    constructor(props){
        super(props)
        this.state = {
            body: this.props.body,
            displayCommentList: false,
            id: this.props.postId
        }
    }

    switchCommentsVisibility() {
        this.setState((prevState) => {
            return {
                displayCommentList: !prevState.displayCommentList
            }
        })
    }

    render(){
        let commentsLabel = this.state.displayCommentList ? "Masquer" : "Afficher"
        return(
            <div>
                <section>
                    {this.state.body}
                </section>
                <a href="javascript:void(0)" onClick={this.switchCommentsVisibility.bind(this)}>{commentsLabel} les commentaires</a>
                {this.state.displayCommentList ? <CommentList postId={this.state.id}/> : null}
            </div>
        )
    }

}

export default PostContent
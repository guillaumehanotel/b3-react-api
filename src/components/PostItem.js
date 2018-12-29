import React, {Component} from 'react'
import PostContent from './PostContent'
import './PostItem.css'

class PostItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            body: this.props.body,
            displayPostContent: false
        }
    }

    switchPostContent() {
        this.setState((prevState) => {
            return {
                displayPostContent: !prevState.displayPostContent
            }
        })
    }

    render() {
        return (
            <article className="post" >
                <fieldset>
                    <h4 onClick={this.switchPostContent.bind(this)}>{this.state.title}</h4>
                    {this.state.displayPostContent ?
                        <PostContent postId={this.state.id} body={this.state.body}/> : null}
                </fieldset>
            </article>
        )
    }
}

export default PostItem
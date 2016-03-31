import React, { Component, PropTypes } from 'react'

class Article extends Component {

    state = {
        isOpen: false,
        isCommitListOpen : false
    }

    render() {

        const { title, text, comments} = this.props.article
        const body = this.state.isOpen ? <section>{text}</section> : null
        const commentList =  comments != undefined ? comments.map((comment)=><div key={comment.id}>{comment.text}</div>):<div>No comments</div>
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
                <a onClick = {this.showCommentList}>Show comments</a>
                <div style={{display:(this.state.isCommitListOpen ? '':'none')}}>
                    {commentList}
                </div>
            </div>
        )
    }
    showCommentList = () => {
        this.setState({
            isCommitListOpen: ! this.state.isCommitListOpen
        })
    }
    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'

class Article extends Component {


    state = {
            commentName:"",
            commentText:""
    }

    render() {
        const { article: { title }, isSelected, openItem, deleteArticle } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a> |
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                {this.getBody()}
            </div>
        )
    }

    deleteArticle = (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }


    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }
    handleChangeComment = (e) => {
        if(e) e.preventDefault();
        this.setState({
            commentText : e.target.value
        })
    }
    handleChangeName = (e) => {
        if(e) e.preventDefault();
        this.setState({
            commentName :e.target.value
        })
    }
    handleAddComment = () => {
        const {addComment, article} = this.props;

        addComment({text:this.state.commentText, name:this.state.commentName}, article.id)
    }

    getBody () {
        if (!this.props.isOpen) return null
        const { article } = this.props
        return (
            <section>
                {article.text}
                <br/>
                <input type="text" value={this.state.commentText}
                       placeholder="Enter new comment"
                       onChange={this.handleChangeComment}/>
                <input type="text" value={this.state.commentName}
                       placeholder="Enter name"
                       onChange={this.handleChangeName}/>
                <button onClick={this.handleAddComment}>Add Comment</button>
                <CommentList comments = {article.getRelation('comments')} ref = "commentList" />
            </section>
        )
    }

}
Article.propTypes = {
    article : PropTypes.object.isRequired,
    openItem : PropTypes.func.isRequired,
    isOpen : PropTypes.bool.isRequired,
    deleteArticle :PropTypes.func.isRequired,
    isSelected : PropTypes.bool.isRequired,
    selectArticle : PropTypes.func.isRequired
}
export default Article
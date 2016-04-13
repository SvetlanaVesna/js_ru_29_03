/**
 * Created by svetlana on 13.04.16.
 */
import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import CommentList from '../components/CommentList'


class CommentsContainer extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        loading: PropTypes.bool
    };

    render() {
        const { comments, loading } = this.props
        if (!comments || loading) return <h3>Loading...</h3>
        return <CommentList comments={comments} />
    }
}

function getState(stores, props) {

    return {
        comments: stores.comments.loadCommentsByPage(props),
        loading: stores.comments.loading
    }
}

export default connectToStore(['comments'], getState)(CommentsContainer)
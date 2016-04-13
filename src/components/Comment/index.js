import React, { Component, PropTypes } from 'react'


function Comment(props) {
    return (
        <div className="comment-body">
            {props.comment.text}
        </div>
    )
}

export default Comment

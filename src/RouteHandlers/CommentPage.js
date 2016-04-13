/**
 * Created by svetlana on 13.04.16.
 */
import React, { Component, PropTypes } from 'react'
import CommentContainer from '../containers/Comments'
import { Link } from 'react-router'

class CommentPage extends Component {

    render() {
        const { page } = this.props.params
        console.log(page)
        var nxtPge = page + 1;
        return (
            <div>
                <h3>Comments page {page}</h3>
                <CommentContainer  page={page}/>
                <Link to={`/comments/${nxtPge}`}  >To {nxtPge} page</Link>
            </div>
        )
    }
}

export default CommentPage
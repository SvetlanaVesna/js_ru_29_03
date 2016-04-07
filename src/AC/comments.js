import AppDispatcher from '../dispatcher'
import {ADD_COMMENT} from '../constants'

export function addComment(comment, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {comment:{text:comment.text, id:Math.random(), name:comment.name},article:articleId}
    })
}
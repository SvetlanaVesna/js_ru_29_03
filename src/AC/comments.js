import AppDispatcher from '../dispatcher'
import { LOAD_COMMENTS_BY_PAGE, ADD_COMMENT } from '../constants'
import { loadByPage } from './api/comments'
import { asyncAC } from './utils'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text, articleId,
            id: Date.now()
        }
    })
}
export const loadCommentsByPage = asyncAC(loadByPage, LOAD_COMMENTS_BY_PAGE)
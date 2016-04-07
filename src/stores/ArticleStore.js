import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    this.emitChange()
                    break;
                case ADD_COMMENT:
                    this.addComment(data)
                    this.emitChange()
                    break;
            }
        })
    }
    addComment = (data) => {
        this.getById(data.article).comments.push([data.comment.id])
    }
}

export default ArticleStore
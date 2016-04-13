import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_COMMENTS_BY_PAGE, START, SUCCESS, FAIL } from '../constants'
import {loadCommentsByPage} from '../AC/comments'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.text,
                        id: data.id
                    })
                    break
                case LOAD_COMMENTS_BY_PAGE + START:
                    this.loading = true;
                    break;
                case LOAD_COMMENTS_BY_PAGE + SUCCESS:
                    response.records.forEach(this.__add)
                    this.loading = false
                    console.log("__CommentStore", this.getAll())
                    break;
                case LOAD_COMMENTS_BY_PAGE + FAIL:
                    this.error = error
                    break;
            }
        })
    }
    loadCommentsByPage(data){
         loadCommentsByPage(data);
        return this.getAll()
    }
}


export default CommentStore
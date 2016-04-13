/**
 * Created by svetlana on 13.04.16.
 */
import $ from 'jquery'
import { commentsLimit } from '../../constants/application'

export function loadByPage(data) {
    return $.get(`/api/comment?limit=${commentsLimit}&offset=${commentsLimit * data.page}`)
}

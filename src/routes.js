import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import IndexPage from './RouteHandlers/IndexPage'
import Articles from './RouteHandlers/Articles'
import ArticlePage from './RouteHandlers/ArticlePage'
import CommentsPage from './RouteHandlers/CommentPage'
import NewArticlePage from './RouteHandlers/NewArticlePage'

export default (
    <Router history = {browserHistory} >
        <Route path="/" component = {IndexPage} >
            <Route path = "articles/new" component = {NewArticlePage} />
            <Route path = "articles" component = {Articles} >
                <Route path = "/new" component = {NewArticlePage} />
                <Route path = ":id" component = {ArticlePage} />
            </Route>
            <Route path="/comments/:page" components={CommentsPage}></Route>
        </Route>
    </Router>
)
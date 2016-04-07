/**
 * Created by svetlana on 07.04.16.
 */
import React, { Component, PropTypes } from 'react'
import {articleStore, commentStore } from '../stores'
import ArticleComponent from './../components/Article'
import { addComment } from '../AC/comments'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = this.getState()
    }

    getState() {
        return {
            article: articleStore.getById(this.props.article.id),
            comments : commentStore.getAll()
        }
    }
    componentDidMount() {
        this.state = this.getState()
        articleStore.addChangeListener(this.changeArticles)
        commentStore.addChangeListener(this.changeArticles)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.changeArticles)
        commentStore.removeChangeListener(this.changeArticles)
    }
    changeArticles = () => {
        this.setState(this.getState())
    }
    render(){
        return <ArticleComponent {...this.props} comments={this.state.comments} addComment={addComment}></ArticleComponent>
    }
}
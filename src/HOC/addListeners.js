/**
 * Created by svetlana on 07.04.16.
 */
import React, { Component as ReactComponent} from 'react'
import {articleStore } from '../stores'
import ArticleComponent from './../components/Article'
import { addComment } from '../AC/comments'

export default (Component) => class Listeners extends ReactComponent {
    constructor(props) {
        super(props)
        this.state = this.getState()
    }

    getState() {
        return {
            articles: articleStore.getAll()
        }
    }
    componentDidMount() {
        this.state = this.getState()
        articleStore.addChangeListener(this.changeArticles)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.changeArticles)
    }
    changeArticles = () => {
        this.setState(this.getState())
    }

    render() {
        return <Component {...this.props} {...this.state}/>
    }
}
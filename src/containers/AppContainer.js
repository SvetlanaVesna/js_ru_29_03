import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './../components/ArticleList'
import { deleteArticle } from '../AC/articles'
import listeners from '../HOC/addListeners'

class AppContainer extends Component {
      render() {
        return <ArticleList {...this.props} deleteArticle = {deleteArticle}/>
    }
}

export default listeners(AppContainer)
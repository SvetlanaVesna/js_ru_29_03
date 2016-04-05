import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleOpen from '../HOC/toggleOpenArticle'

class AricleList extends Component {
    state = {
        selectedArticles: []
    }

    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    article = {article}
                    isSelected = {this.state.selectedArticles.includes(article.id)}
                    selectArticle = {this.selectArticle}
                    isOpen={this.props.selectedArticle === article.id}
                    toggleOpen={this.handleClick}
                />
            </li>
        )
    }

    selectArticle = (id) => {
        this.setState({
            selectedArticles: this.state.selectedArticles.concat(id)
        })
    }
    handleClick = (id) => {
        this.props.toggleOpen(id)
    }
}

export default toggleOpen(AricleList)
import React, { Component as ReactComponent } from 'react'

export default (Component) => class ToggleOpenArticle extends ReactComponent {
    state = {
        selectedArticle: 0
    }
    toggleOpen = (id)  =>{
        console.log("toggleOpenArticle()")
        console.log(id)
        this.setState({
            selectedArticle: id
        })

    }

    render() {
        return <Component {...this.props} selectedArticle = {this.state.selectedArticle} toggleOpen = {this.toggleOpen} />
    }
}
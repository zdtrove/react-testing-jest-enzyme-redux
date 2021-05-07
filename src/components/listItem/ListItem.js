import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ListItem extends Component {
    render() {
        const { title, desc } = this.props
        if (!title) {
            return null
        }
        return (
            <div data-test="list-item-component">
                <h2 data-test="title">{title}</h2>
                <p data-test="desc">{desc}</p>
            </div>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default ListItem

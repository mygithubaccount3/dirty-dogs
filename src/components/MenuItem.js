import React, {Component} from 'react'

class MenuItem extends Component{
    render() {
        return (
            <div className="menu__item">
                <div className="menu__description">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
                <img className="menu__photo" src={this.props.url} alt="food" />
            </div>
        )
    }
}

export default MenuItem

import React, {Component} from 'react'
import MenuItem from './MenuItem'
import '../styles/menu.scss'

class Menu extends Component{
    render() {
        return (
            <section className="menu">
                {this.props.items.map(item => (
                    <MenuItem key={item.id}
                              title={item.name}
                              description={item.description}
                              url={item.backgroundURL}/>
                ))}
            </section>
        )
    }
}

export default Menu

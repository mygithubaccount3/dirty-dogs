import React, {Component} from 'react'
import Intro from './Intro'
import Menu from './Menu'

class Content extends Component{
    constructor() {
        super();
        this.state = {items: []}
    }
    render() {
        return (
            <main className="hero">
                <Intro />
                <Menu items={this.state.items} />
            </main>
        )
    }
    componentDidMount() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://formula-test-api.herokuapp.com/menu', false);
        xhr.send();

        if (xhr.status !== 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            const filtered = JSON.parse(xhr.responseText).filter(item => new Date(item.expirationDate) > Date.now());
            this.setState({
                items: filtered
            });
        }
    }
}

export default Content

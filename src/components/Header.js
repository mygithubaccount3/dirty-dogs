import React, {Component} from 'react'
import Photos from './Photos'
import Navbar from "./Navbar";

class Header extends Component {
    render() {
        return (
            <header>
                <Photos />
                <Navbar />
            </header>
        )
    }
}

export default Header

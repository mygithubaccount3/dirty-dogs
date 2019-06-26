import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/dirty-dogs/build" className="nav-item nav-link navbar__item">Menu <span className="sr-only">(current)</span></Link>
                        <a className="nav-item nav-link navbar__item" href="#">Catering</a>
                        <a className="nav-item nav-link navbar__item" href="#">About us</a>
                        <Link to="/dirty-dogs/build/contact" className="nav-item nav-link navbar__item">Contact us</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar

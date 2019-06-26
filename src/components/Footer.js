import React, {Component} from 'react'
import '../styles/footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer>
                <span className="copyright">® 2016 Dirty Dogs all rights reserved</span>
                <span className="contact">274 Marconi Blvd. Columbus, Ohio 43215 | 614.538.0095 | Contact Us</span>
            </footer>
        )
    }
}

export default Footer

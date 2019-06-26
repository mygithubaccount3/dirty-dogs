import React, {Component} from 'react'
import '../styles/contacts.scss'

class Contacts extends Component {
    constructor() {
        super();
        this.sendMessage = this.sendMessage.bind(this)
    }
    render() {
        return (
            <main>
                <form className="contact-form">
                    <input type="text" ref="inputName" placeholder="Name" required/>
                    <input type="email" ref="inputEmail" placeholder="Email" required/>
                    <textarea rows="10" ref="inputComment" placeholder="Message" required />
                    <button onClick={this.sendMessage}>Send</button>
                    <span ref="spinner"></span>
                </form>
            </main>
        )
    }
    sendMessage(e) {
        e.preventDefault();
        const component = this;

        this.refs.spinner.style.display = "block";
        const xhr = new XMLHttpRequest();

        xhr.open("POST", 'https://formula-test-api.herokuapp.com/contact');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({name: this.refs.inputName.value, email: this.refs.inputEmail.value,
                                       comment: this.refs.inputComment.value}));
        xhr.onload = function () {
            component.refs.spinner.style.display = "none";
        };
    }
}

export default Contacts

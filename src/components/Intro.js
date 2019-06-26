import React, {Component} from 'react'
import hotdogImg from '../img/hotdog.svg'
import '../styles/intro.scss'

class Intro extends Component{
    render() {
        return (
            <section className="intro">
                <img src={hotdogImg} alt="Hotdog" />
                <h1 className="intro__title">Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</h1>
                <a href="#" className="intro__link">More Dogs ‘n Make Em Hot</a>
            </section>
        )
    }
}

export default Intro

import React, {Component} from 'react'
import img1 from '../img/photo_1.jpg'
import img2 from '../img/photo_2.jpg'
import img3 from '../img/photo_3.jpg'
import img4 from '../img/photo_4.jpg'
import img5 from '../img/photo_5.jpg'
import img6 from '../img/photo_6.jpg'
import img7 from '../img/photo_7.jpg'
import img8 from '../img/photo_8.jpg'
import img9 from '../img/photo_9.jpg'
import img10 from '../img/photo_10.jpg'
import img11 from '../img/photo_11.jpg'
import img12 from '../img/photo_12.jpg'
import '../styles/photos.scss'

class Photos extends Component{
    render() {
        return (
            <ul className="photos">
                <li className="photos__link"><a href="#">#hotdogs</a></li>
                <li className="photos__item"><img src={img1} alt="food"/></li>
                <li className="photos__item"><img src={img2} alt="food"/></li>
                <li className="photos__item"><img src={img3} alt="food"/></li>
                <li className="photos__item"><img src={img4} alt="food"/></li>
                <li className="photos__item"><img src={img5} alt="food"/></li>
                <li className="photos__item"><img src={img6} alt="food"/></li>
                <li className="photos__item"><img src={img7} alt="food"/></li>
                <li className="photos__item"><img src={img8} alt="food"/></li>
                <li className="photos__item"><img src={img9} alt="food"/></li>
                <li className="photos__item"><img src={img10} alt="food"/></li>
                <li className="photos__item"><img src={img11} alt="food"/></li>
                <li className="photos__item"><img src={img12} alt="food"/></li>
            </ul>
        )
    }
}

export default Photos

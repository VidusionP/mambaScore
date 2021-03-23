import React, { Component } from 'react';
import "./Gallery.scss"
import Pic1 from '../../assests/Raptors/1.jpg'
import Pic2 from '../../assests/Raptors/2.jpg'
import Pic3 from '../../assests/Raptors/3.jpg'
import Pic4 from '../../assests/Raptors/4.jpg'
import Pic5 from '../../assests/Raptors/5.jpg'

class Gallery extends Component {
    render() {
        return(
            <div className="gallery">
                <h2 className="gallery__title">Gallery</h2>
                <div className="gallery__images">
                    <div><img alt="raps" className="gallery__images--items" src={Pic1}/></div>
                    <div><img alt="raps" className="gallery__images--items" src={Pic2}/></div>
                    <div><img alt="raps" className="gallery__images--items" src={Pic3}/></div>
                    <div><img alt="raps" className="gallery__images--items" src={Pic4}/></div>
                    <div><img alt="raps" className="gallery__images--items" src={Pic5}/></div>
                    
                </div>
            </div>
        )
    }
}

export default Gallery;
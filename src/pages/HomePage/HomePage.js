import React, { Component } from 'react';
import "./HomePage.scss"
import Hero from "../../components/Hero/Hero"
import Gallery from "../../components/Gallery/Gallery"
import News from "../../components/NewsFeed/News"

class Home extends Component {
    render() {
        return(
            <>
            <Hero/>
            <div className="displayflex">
                <Gallery/>
                <News/>
            </div>
            </>
        )
    }
}

export default Home;
import React, { Component } from 'react';
import "./Scroll.scss"
import arrow from '../../assests/chevrons-up.svg'

class Team extends Component {
    state = {
        isVisible:false
    }
    componentDidMount() {
        var scrollComponent = this;
            document.addEventListener("scroll", function(e) {
              scrollComponent.toggleVisibility();
            });
    }
    toggleVisibility() {
        if (window.pageYOffset > 400) {
          this.setState({
            isVisible: true
          });
        } else {
          this.setState({
            isVisible: false
          });
        }
      }
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    render() {
        const { isVisible } = this.state;
        return(
            <>
            <div>{isVisible && (<img alt="arrow"src={arrow} className="scrollUp" onClick={() => this.scrollToTop()}/>)}</div>
            </>
        )
    }
}

export default Team;
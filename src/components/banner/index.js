import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import axios from 'axios';

class Index extends Component {
  state = { banners: null, slideIndex: 1 };

  componentDidMount() {
    axios.get('/banners.json')
      .then(response => {
        this.setState({ banners: response.data.slides });
        this.showSlides(this.state.slideIndex);
      });
  }

  plusSlides(n) {
    this.setState({ slideIndex: this.state.slideIndex + n });
    this.showSlides(this.state.slideIndex + n);
  }

  currentSlide(n) {
    this.setState({ slideIndex: this.state.slideIndex + n });
    this.showSlides(this.state.slideIndex + n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = n;

    if (n > slides.length) {
      slideIndex = 1;
      this.setState({ slideIndex: 1 });
    }
    if (n < 1) {
      slideIndex = slides.length;
      this.setState({ slideIndex: slides.length });
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  renderItems() {
    return this.state.banners.map((banner, key) => {
      return (
        <div className="mySlides fade" key={key}>
          <MediaQuery query='(min-width: 750px)'>
            <img src={banner.image} alt={banner.alt} />
          </MediaQuery>
          <MediaQuery query='(max-width: 750px)'>
            <img src={banner.mobile} alt={banner.alt} />
          </MediaQuery>
        </div>
      )
    });
  }

  renderDots() {
    return this.state.banners.map((banner, key) => {
      return (
        <span
          className="dot"
          onClick={this.currentSlide.bind(this, key)}
          key={key}
        ></span>
      )
    });
  }

  render() {
    if (!this.state.banners) {
      return null;
    }

    return (
      <div className="App banners">
        <div className="slideshow-container container">
          {this.renderItems()}
          <a className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
          <a className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>
        </div>

        <div className="dots">
          {this.renderDots()}
        </div>
      </div>
    );
  }
}

export default Index;

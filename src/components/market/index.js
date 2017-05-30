import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

class PrevNavButton extends Component {
  render() {
    return (
      <div role="button" className="slick-control prev" onClick={this.props.onClick}>
        <i className="ico arrow-left" />
      </div>
    );
  }
}

class NextNavButton extends Component {
  render() {
    return (
      <div role="button" className="slick-control next" onClick={this.props.onClick}>
        <i className="ico arrow-right" />
      </div>
    );
  }
}

class Index extends Component {
  state = { products: null };

  componentWillMount() {
    axios.get('/sapatos.json')
      .then(response => {
        this.setState({ products: response.data.products });
      });
  }

  renderProducts() {
    return this.state.products.map((product, key) => {
      return (
        <a className="item" key={key}>
          <div className="item-img">
            <img src={product.images.default} alt="" />
          </div>
          <h3>{product.name}</h3>
          <div className="stars">
            <img src="images/icons/estrelas.png" alt="" />
          </div>
          <div className="price">
            {product.old_amount ? <p className="de">De: {product.old_amount}</p> : null}
            <p className="por">Por: {product.amount}</p>
            <p className="or">ou <span>até {product.max_installments}</span> de <span>{product.price_installments}</span></p>
          </div>
          <div className="buttons">
            <button type="button" className="btn-buy"><span className="ico-market"></span> Comprar</button>
            <button type="button" className="economize">Economize{product.economy}</button>
          </div>
        </a>
      )
    })
  }

  render() {
    const { products } = this.state;

    if (!products) {
      return null;
    }

    const settings = {
      dots: false,
      infinite: products && products.length > 4,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: false,
      accessibility: false,
      touchMove: false,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 1024, settings: { slidesToShow: 4 } }
      ],
      prevArrow: <PrevNavButton />,
      nextArrow: <NextNavButton />,
    };

    return (
      <div className="market">
        <div className="container">
          <Slider {...settings}>
            {this.renderProducts()}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Index;

import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="box-city">
            <div className="city-img">
              <img src="images/icons/icone_rj.png" alt="" />
            </div>
            <div className="address">
              <p>Rua do acre, 77 - sala 1108</p>
              <p>Centro - Rio de Janeiro</p>
              <p>tel.: +55 (21) 2263.6044</p>
            </div>
          </div>
          <div className="box-city">
            <div className="city-img">
              <img src="images/icons/icone_sp.png" alt="" />
            </div>
            <div className="address">
              <p>Rua Cardoso de melo, 1750</p>
              <p>6 Andar Vila Olimpia</p>
              <p>tel.: +55 (21) 2263.6044</p>
            </div>
          </div>
          <div className="contacts">
            <div className="contact-us">
              <img src="images/icons/icone_contato.png" alt="" />
              Entre em contato
            </div>
            <div className="contact-online">
              <img src="images/icons/icone_consultor.png" alt="" />
              Fale com o nosso <br />
              Consultor online
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Index;

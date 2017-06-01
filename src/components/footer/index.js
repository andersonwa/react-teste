import React, { Component } from 'react';
import CityAddress from './city_address';

class Index extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <CityAddress
            image="images/icons/icone_rj.png"
            street="Rua do acre, 77 - sala 1108"
            city="Centro - Rio de Janeiro"
            phone="+55 (21) 2263.6044" />

          <CityAddress
              image="images/icons/icone_sp.png"
              street="Rua Cardoso de melo, 1750"
              city="6 Andar Vila Olimpio"
              phone="+55 (21) 2263.6044" />

          <div className="contacts">
            <div className="contact-us">
              <img src="images/icons/icone_contato.png" alt="Ico" />
              Entre em contato
            </div>
            <div className="contact-online">
              <img src="images/icons/icone_consultor.png" alt="Ico" />
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

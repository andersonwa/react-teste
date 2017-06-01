import React from 'react';

const CityAddress = ({ image, street, city, phone }) => {
  return (
    <div className="box-city">
      <div className="city-img">
        <img src={image} alt="Ico" />
      </div>
      <div className="address">
        <p>{street}</p>
        <p>{city}</p>
        <p>tel.: {phone}</p>
      </div>
    </div>
  );
}

export default CityAddress;

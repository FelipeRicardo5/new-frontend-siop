import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './catwalk.module.css'; // estilo opcional extra

export default function Passarela({ dados }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // em telas menores
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="passarela-container">
      <Slider {...settings}>
        {dados.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

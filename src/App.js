import React, { useState, useEffect } from "react";
import "./App.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://github.com/leonelborgesdev/leonelborgesdev/assets/95236206/173a4733-ed7c-424b-aede-6c87b054d624",
    "https://github.com/leonelborgesdev/leonelborgesdev/assets/95236206/a2b0d113-4e62-4db0-aa96-13487e8c8bd2",
    "https://github.com/leonelborgesdev/leonelborgesdev/assets/95236206/340759a6-66a8-4866-b425-264b6c37fe23",
    // Agrega más imágenes según sea necesario
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia el tiempo de transición según tus necesidades

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;

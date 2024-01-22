import React, { useState, useEffect } from "react";
import "./App.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.jpg",
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

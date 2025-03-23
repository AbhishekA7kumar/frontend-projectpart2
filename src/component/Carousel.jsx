import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carousel.css';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-image img1"></div>
          <div className="carousel-caption">
            <h1 className="greeting">Hi, I'm Abhishek 👋</h1>
            <h2 className="animation-text">Web Developer</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image img2"></div>
          <div className="carousel-caption">
            <h1 className="greeting">Hi, I'm Abhishek 👋</h1>
            <h2 className="animation-text">React Enthusiast</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image img3"></div>
          <div className="carousel-caption">
            <h1 className="greeting">Hi, I'm Abhishek 👋</h1>
            <h2 className="animation-text">UI/UX Designer</h2>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
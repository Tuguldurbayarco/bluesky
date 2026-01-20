"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const CarsSlider = () => { 
  return (
    <Carousel
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
      indicators
      interval={8000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car1.jpg"
          alt="First slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car2.jpg"
          alt="Second slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car3.jpg"
          alt="Third slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car4.jpg"
          alt="Forth slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car5.jpg"
          alt="Forth slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car6.jpg"
          alt="Forth slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car7.jpg"
          alt="Forth slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car8.jpg"
          alt="Forth slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/car9.jpg"
          alt="Forth slide"
          style={{borderRadius: "10px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarsSlider



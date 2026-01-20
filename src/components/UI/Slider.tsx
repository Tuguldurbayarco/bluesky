"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel interval={3000} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/3.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider
"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "@/app/[locale]/(pages)/main.module.css";

const SeasonsSlider = ({...props}: any) => { 
  return (
    <Carousel
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
      indicators
      interval={5000}
    >
      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="/winter.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>{props.winter}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="/spring.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>{props.spring}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="/summer.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>{props.summer}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="/autumn.jpg"
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h1>{props.autumn}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SeasonsSlider



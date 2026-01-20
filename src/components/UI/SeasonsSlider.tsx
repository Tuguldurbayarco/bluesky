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
        <div className={styles.seasons_slider_text}>
          <p>{props.winterDescription1}</p>
          <p>{props.winterDescription2}</p>
        </div>
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
          <div className={styles.seasons_slider_text}>
            <p>{props.springDescription1}</p>
            <p>{props.springDescription2}</p>
          </div>
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
          <div className={styles.seasons_slider_text}>
            <p>{props.summerDescription1}</p>
            <p>{props.summerDescription2}</p>
          </div>
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
          <div className={styles.seasons_slider_text}>
            <p>{props.autumnDescription1}</p>
            <p>{props.autumnDescription2}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SeasonsSlider



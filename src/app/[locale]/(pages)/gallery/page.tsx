"use client";

import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import ImageGallery from "@/components/UI/ImageGallery";
import styles from "./gallery.module.css";

// Gallery images - Add more images by adding them to the gallery folder
// and including them in this array
const GALLERY_IMAGES = [
  { src: "/gallery/1.jpg", alt: "Gallery Image 1" },
  { src: "/gallery/1-1.jpg", alt: "Gallery Image 2" },
  { src: "/gallery/2.jpg", alt: "Gallery Image 3" },
  { src: "/gallery/2-2.jpg", alt: "Gallery Image 4" },
  { src: "/gallery/3.jpg", alt: "Gallery Image 5" },
  { src: "/gallery/3-3.jpg", alt: "Gallery Image 6" },
  { src: "/gallery/15.jpg", alt: "Gallery Image 7" },
  { src: "/gallery/16.jpg", alt: "Gallery Image 8" },
  { src: "/gallery/18.jpg", alt: "Gallery Image 9" },
  { src: "/gallery/19.jpg", alt: "Gallery Image 10" },
];

const Gallery = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div style={{position: "relative"}}>
        <img
          src='/bt0.jpg'
          alt='Gallery'
          width='100%'
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>Gallery</h1>
        </div>
      </div>
      <div className='visibility_area' style={{textAlign: "center"}}>
        <h2 className="pageTitle" style={{marginTop: '8rem'}}>Our Photo Gallery</h2>
        <p className="pageDescription" style={{marginBottom: '5rem'}}>
          Explore the beautiful moments and stunning landscapes captured during our tours across Mongolia.
        </p>
        <ImageGallery images={GALLERY_IMAGES} />
      </div>
    </div>
  );
}

export default Gallery;

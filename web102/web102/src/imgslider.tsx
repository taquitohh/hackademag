// let nextBtn = document.querySelector('.next')
// let prevBtn = document.querySelector('.prev')

// let slider = document.querySelector('.slider')
// let sliderList = slider.querySelector('.slider . list')
// let thumbnail = document.querySelector('.thumbnail')
// let thumbnailItems = thumbnail.querySelectorAll('.item')

// thumbnail.appendChild(thumbnailItems[0])

// //function for next button
// nextBtn.onclick = function() {
//     moveSlider('next')
// }

// //function for prev button
// prevBtn.onclick = function() {
//     moveSlider('prev')
// }

// function moveSlider(direction) {
//     let sliderItems = sliderList.querySelectorAll('.item')
//     let thumbnailItem = document.querySelectorAll('.thumbnail .item ')
//     if(direction === 'next') {
//         sliderList.appendChild(sliderItems[0])
//         thumbnail.appendChild(thumbnailItems[0])
//         slider.classList.add('next')
//     } else {
//         sliderList.prepend(sliderItems[sliderItems.length - 1])
//         thumbnail.prepend(thumbnailItems[thumbnailItem.length - 1])
//         slider.classList.add('prev')
//     }
// }

// .slider.addEventListener('animationend', function() {
//     if(direction === 'next') {
//         slider.classList.remove('next')
//     } else {
//         slider.classList.remove('prev')
//     }
// } {once: true}) // remove the event listener after it s triggered once


// import React, { useEffect, useRef } from 'react';

// const ImgSlider: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const thumbnailRef = useRef<HTMLDivElement>(null);

//   const moveSlider = (direction: 'next' | 'prev') => {
//     if (!sliderRef.current || !thumbnailRef.current) return;

//     const sliderItems = sliderRef.current.querySelectorAll('.item');
//     const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

//     if (direction === 'next') {
//       sliderRef.current.appendChild(sliderItems[0]);
//       thumbnailRef.current.appendChild(thumbnailItems[0]);
//       sliderRef.current.classList.add('next');
//     } else {
//       sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
//       thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
//       sliderRef.current.classList.add('prev');
//     }
//   };

//   useEffect(() => {
//     if (!sliderRef.current) return;

//     const handleAnimationEnd = () => {
//       sliderRef.current?.classList.remove('next', 'prev');
//     };

//     sliderRef.current.addEventListener('animationend', handleAnimationEnd, { once: true });

//     return () => {
//       sliderRef.current?.removeEventListener('animationend', handleAnimationEnd);
//     };
//   }, []);

//   return (
//     <div>
//       <button onClick={() => moveSlider('next')}>Next</button>
//       <button onClick={() => moveSlider('prev')}>Prev</button>

//       <div className="slider" ref={sliderRef}>
//         {/* Slider items go here */}
//       </div>

//       <div className="thumbnail" ref={thumbnailRef}>
//         {/* Thumbnail items go here */}
//       </div>
//     </div>
//   );
// };

// export default ImgSlider;


import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./home.css"


type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          height: "5%",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}
import React from "react";
import Image from "next/image";
import './carousel.css';

function carousel(props) {
  const items = props.carouselItems;

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div className="carousel-inner">
        {items.map((item, index) => {
          if(index == 0) {
            return (
              <div className="carousel-item active" key={index}>
                <img
                  src={item}
                  className="d-block w-100 object-fit-cover" 
                  alt={"carousel " + index}
                />
              </div>
            )
          } else {
            return (
              <div className="carousel-item" key={index}>
                <img
                  src={item}
                  className={"d-block w-100 object-fit-cover" } 
                  alt={"carousel " + index}
                />
              </div>
            );

          }
          })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default carousel;

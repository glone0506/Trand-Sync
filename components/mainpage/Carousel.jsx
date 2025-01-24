"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="\first.jpg" // public 폴더에 위치한 이미지
          className="d-block w-100"
          alt="First slide"
          style={{ maxHeight: "400px", objectFit: "cover" }} // 최대 높이를 400px로 설정하고 비율 유지
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="\second.jpg" // public 폴더에 위치한 이미지
          className="d-block w-100"
          alt="Second slide"
          style={{ maxHeight: "400px", objectFit: "cover" }} // 최대 높이를 400px로 설정하고 비율 유지
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="\third.jpg" // public 폴더에 위치한 이미지
          className="d-block w-100"
          alt="Third slide"
          style={{ maxHeight: "400px", objectFit: "cover" }} // 최대 높이를 400px로 설정하고 비율 유지
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

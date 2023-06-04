"use client";
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Testimonials.css";
import data from "../../public/data.json";
import invertedComma from "../../public/assets/images/testimonials/“.png";
import left from "../../public/assets/images/testimonials/left.png";
import right from "../../public/assets/images/testimonials/right.png";

import Image from "next/image";

const Testimonials = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel xl:my-[60px] my-[10px]">
      <Image
        src={left}
        alt="Left Cursor"
        onClick={prevSlide}
        className="arrow arrow-left"
      />
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          >
            <Image
              src={invertedComma}
              alt="Inverted Comma"
              className="mb-[35px] mt-[50px]"
            />
            <p className="text-center font-sintony xl:text-[15px] mb-[22px] xl:w-2/5 w-4/5">
              {item.quote}
            </p>
            <p className="font-bold mb-[16px]">{item.author}</p>
            <p className="font-semibold">{item.role}</p>
          </div>
        );
      })}
      <Image
        src={right}
        alt="Right Cursor"
        onClick={nextSlide}
        className="arrow arrow-right"
      />
    </div>
  );
};

export default Testimonials;

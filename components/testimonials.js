import React, { useState } from 'react';
import Container from './container';
import Slider from 'react-slick';
import Image from 'next/image';

import userOneImg from '../public/img/user1.png';
import userTwoImg from '../public/img/user2.png';
import userThreeImg from '../public/img/user3.png';
import userFourImg from '../public/img/user4.png';
import userFiveImg from '../public/img/user5.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation("translation");
  const testimonialsData = [
    {
      text: t("testimonialsData.testimonial1.text"),
      author: t("testimonialsData.testimonial1.author"),
      title: t("testimonialsData.testimonial1.title"),
    },
    {
      text: t("testimonialsData.testimonial2.text"),
      author: t("testimonialsData.testimonial2.author"),
      title: t("testimonialsData.testimonial2.title"),
    },
    {
      text: t("testimonialsData.testimonial3.text"),
      author: t("testimonialsData.testimonial3.author"),
      title: t("testimonialsData.testimonial3.title"),
    },
    {
      text: t("testimonialsData.testimonial4.text"),
      author: t("testimonialsData.testimonial4.author"),
      title: t("testimonialsData.testimonial4.title"),
    },
    {
      text: t("testimonialsData.testimonial5.text"),
      author: t("testimonialsData.testimonial5.author"),
      title: t("testimonialsData.testimonial5.title"),
    },
  ];   

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings} className="mx-4">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 py-4 rounded-md dark:bg-trueGray-800 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2">
              <p className="text-sm md:text-base text-justify leading-normal text-trueGray-600 dark:text-trueGray-400 mb-4">{testimonial.text}</p>
              <Avatar image={index === 0 ? userOneImg : index === 1 ? userTwoImg : index === 2 ? userThreeImg : index === 3 ? userFourImg : userFiveImg} name={testimonial.author} title={testimonial.title} />
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute top-1/2 left-[-40px] -translate-y-1/2 text-3xl text-[#0c5a8d] cursor-pointer focus:outline-none pl-4 z-10">
      &lt;
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute top-1/2 right-[-40px] -translate-y-1/2 text-3xl text-[#0c5a8d] cursor-pointer focus:outline-none pr-4 z-10">
      &gt;
    </button>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-4 sm:mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 sm:w-15 sm:h-15">
        <Image src={props.image} width={60} height={60} alt="Avatar" placeholder="blur" />
      </div>
      <div>
        <div className="text-sm font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400 text-xs">{props.title}</div>
      </div>
    </div>
  );
}

export default Testimonials;

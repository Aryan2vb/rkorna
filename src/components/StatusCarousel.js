import React from 'react';
import Slider from 'react-slick';
import StatusItem from './StatusItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './StatusCarousel.css';

const StatusCarousel = ({ statuses }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className="status-carousel">
            {statuses.map((status, index) => (
                <StatusItem key={index} status={status} />
            ))}
        </Slider>
    );
};

export default StatusCarousel;

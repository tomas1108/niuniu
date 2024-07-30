'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const BannerSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const banners = [
        "/images/banner/banner9.jpg",
        "/images/banner/banner10.jpg",
        "/images/banner/banner11.jpg",
        "/images/banner/banner12.jpg",
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="banner">
            <div className="carousel">
                <Image
                    src={banners[currentIndex]}
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"

                />

                <div className="bannerText">
                    ★★★ Nó hiện có sẵn bình thường. ★★★ Nó hiện có sẵn bình thường. ★★★
                    Nó hiện có sẵn bình thường.
                </div>
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
    )
}

BannerSlider.displayName = 'BannerSlider';
export default BannerSlider; 
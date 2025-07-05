'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { sliderItems } from '../data/sliderItems';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <Swiper
                modules={[Navigation, Pagination, Keyboard]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                className="swiper-container"
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link
                            href={item.productUrl}
                            className="block w-full h-40 sm:h-56 md:h-64 lg:h-72 relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform hover:scale-105"
                            aria-label={`View details for ${item.productName} - ${item.metaobject}`}
                        >
                            <Image
                                src={item.imageUrl}
                                alt={`${item.productName} - ${item.metaobject}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-xs sm:text-sm">
                                <div className="font-semibold">{item.productName}</div>
                                <div>{item.metaobject}</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex items-center justify-center gap-4 mt-6">
                <button
                    className="swiper-button-prev w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    aria-label="Go to previous slide"
                >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <div className="swiper-pagination flex items-center gap-2"></div>

                <button
                    className="swiper-button-next w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    aria-label="Go to next slide"
                >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;

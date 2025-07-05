'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';
import { sliderItems } from '../data/sliderItems';

const SLIDES_PER_PAGE = parseInt(process.env.NEXT_PUBLIC_SLIDES_PER_PAGE || '4', 10);

const ImageSlider = () => {
    const [page, setPage] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const totalPages = Math.ceil(sliderItems.length / SLIDES_PER_PAGE);

    const handlePrev = useCallback(() => setPage(p => Math.max(0, p - 1)), []);
    const handleNext = useCallback(
        () => setPage(p => Math.min(totalPages - 1, p + 1)),
        [totalPages],
    );

    const startIndex = page * SLIDES_PER_PAGE;
    const visibleItems = sliderItems.slice(startIndex, startIndex + SLIDES_PER_PAGE);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                handleNext();
            }
        };

        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('keydown', handleKeyDown);
            return () => slider.removeEventListener('keydown', handleKeyDown);
        }
    }, [handlePrev, handleNext]);

    return (
        <div
            ref={sliderRef}
            className="mx-auto max-w-6xl"
            role="region"
            aria-label="Image Gallery"
            tabIndex={0}
        >
            <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center"
                aria-label="Gallery items"
            >
                {visibleItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.productUrl}
                            className="block w-full h-40 sm:h-56 md:h-64 lg:h-72 relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                    </li>
                ))}
            </ul>

            {totalPages > 1 && (
                <nav
                    className="flex items-center justify-center gap-4 mt-6 select-none"
                    role="navigation"
                    aria-label="Gallery navigation"
                >
                    <button
                        onClick={handlePrev}
                        disabled={page === 0}
                        aria-label="Go to previous page"
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <div
                        className="flex items-center gap-2"
                        role="group"
                        aria-label="Page indicators (dots)"
                    >
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`w-2.5 h-2.5 rounded-full ${i === page ? 'bg-black' : 'bg-gray-300'} transition focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                aria-label={`Go to page ${i + 1}`}
                                aria-current={i === page ? 'page' : undefined}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={page === totalPages - 1}
                        aria-label="Go to next page"
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </nav>
            )}

            <div className="sr-only" aria-live="polite" aria-atomic="true">
                Page {page + 1} of {totalPages}
            </div>
        </div>
    );
};

export default ImageSlider;

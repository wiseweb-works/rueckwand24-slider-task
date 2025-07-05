import Image from 'next/image';
import Link from 'next/link';
import { sliderItems } from '../data/sliderItems';

const SLIDES_PER_PAGE = parseInt(process.env.NEXT_PUBLIC_SLIDES_PER_PAGE || '4', 10);

const ImageSlider = () => {
    const totalPages = Math.ceil(sliderItems.length / SLIDES_PER_PAGE);
    return (
        <div className="mx-auto max-w-6xl">
            <ul className="grid grid-cols-4 gap-4 justify-center">
                {sliderItems.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            href={item.productUrl}
                            className="block w-full h-72 relative rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.imageUrl}
                                alt={`${item.productName} - ${item.metaobject}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                                <div>{item.productName}</div>
                                <div>{item.metaobject}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            <nav className="flex items-center justify-center gap-4 mt-6">
                <button className="w-8 h-8 flex items-center justify-center bg-gray-200">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button key={i} className="w-2.5 h-2.5 rounded-full" />
                    ))}
                </div>
                <button className="w-8 h-8 flex items-center justify-center bg-gray-200">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
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
        </div>
    );
};

export default ImageSlider;

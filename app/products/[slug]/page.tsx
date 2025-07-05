import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { sliderItems } from '@/app/data/sliderItems';

export async function generateStaticParams() {
    return sliderItems.map(item => ({ slug: item.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = sliderItems.find(item => item.slug === slug);
    if (!product) return notFound();
    return (
        <div className="min-h-screen grid place-items-center bg-gray-50 py-12 px-4">
            <article className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center text-center">
                <header>
                    <h1 className="text-2xl font-bold mb-2">{product.productName}</h1>
                    <p className="text-gray-600 mb-4">{product.metaobject}</p>
                </header>

                <figure className="w-full h-64 relative mb-6 rounded-lg overflow-hidden">
                    <Image
                        src={product.imageUrl}
                        alt={`${product.productName} - ${product.metaobject}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <figcaption className="sr-only">
                        {product.productName} - {product.metaobject}
                    </figcaption>
                </figure>

                <nav aria-label="Preview navigation">
                    <Link
                        href="/"
                        className="mt-4 inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="Return to home page"
                    >
                        Back to Home
                    </Link>
                </nav>
            </article>
        </div>
    );
}

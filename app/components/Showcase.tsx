import dynamic from 'next/dynamic';

const ImageSlider = dynamic(() => import('./ImageSlider'), {
    loading: () => (
        <div role="status" aria-live="polite">
            <span className="sr-only">Loading image slider...</span>
            <div>Loading...</div>
        </div>
    ),
});

const Showcase = () => {
    return (
        <section
            className="w-full px-2 sm:px-4 md:px-8 py-8"
            aria-labelledby="image-slider-heading"
        >
            <h2
                id="image-slider-heading"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6"
            >
                Wunderschön - Ergebnisse unserer Kunden
            </h2>
            <ImageSlider />
        </section>
    );
};

export default Showcase;

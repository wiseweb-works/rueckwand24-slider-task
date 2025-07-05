import AxeTest from './components/AxeTest';
import Showcase from './components/Showcase';

export default function Home() {
    return (
        <main id="main-content" className="grid place-items-center min-h-screen">
            <AxeTest />
            <h1 className="sr-only">Image Showcase - Rueckwand24</h1>
            <Showcase />
        </main>
    );
}

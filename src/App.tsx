import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { ThemeToggle } from './components/ThemeToggle';
import { Reveal } from './components/Reveal';
import { Separator } from './components/Separator';

function App() {
    return (
        <div className="container">
            <header>
                <h1>Davide</h1>
                <ThemeToggle />
            </header>

            <main>
                <Reveal><About /></Reveal>
                <Separator />

                <Reveal><Skills /></Reveal>
                <Separator />

                <Reveal><Projects /></Reveal>
                <Separator />

                <Reveal><Contact /></Reveal>
            </main>

            <footer style={{ textAlign: 'center', padding: '4rem 0', opacity: 0.5 }}>
                <p>© {new Date().getFullYear()} — davmarc-lab</p>
            </footer>
        </div>
    );
}

export default App;

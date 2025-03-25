import { useContext } from 'react';
import Header from './components/Header';
import ThemeContext, { ThemeProvider } from './context/ThemeContext';
import './index.css';

function AppContent() {
    const { theme } = useContext(ThemeContext);

    return (
        <div id="app" className={theme}>
            <Header />
            <main>
                <p>Tere tulemast demo veebilehele!</p>
            </main>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;

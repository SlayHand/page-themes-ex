import { useContext } from 'react';
import ThemeContext, { ThemeProvider } from './context/ThemeContext';
import './index.css';
import Page from './components/Page'

function AppContent() {
    const { theme } = useContext(ThemeContext);

    return (
        <div id="app" className={theme}>            
            <Page />
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

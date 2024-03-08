import './App.css';
import Navbar from './components/Navbar';

const App = () => {
    document.title = 'Clicky'
    return (
        <div className="App">
            <Navbar />
        </div>
    );
}

export default App;
import './App.css';
import Aside from './components/Aside/Aside';
import MainPage from './components/MainPage/MainPage';
import TopBar from './components/TopBar/TopBar';

function App() {
    return (
        <div className="App">
            <div className="block lg:hidden">
                <Aside />
            </div>

            <div className="hidden lg:block">
                <TopBar />
            </div>

            <MainPage />
        </div>
    );
}

export default App;

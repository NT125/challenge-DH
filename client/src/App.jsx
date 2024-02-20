import './App.css';
import Aside from './components/Aside/Aside';
import AsideMobile from './components/Aside/AsideMobile';
import MainPage from './components/MainPage/MainPage';
import TopBar from './components/TopBar/TopBar';

export default function App() {
    return (
        <div className="App">
            <div className="block lg:hidden">
                <AsideMobile />
            </div>

            <div className="flex">
                <div className="hidden lg:block basis-0 lg:basis-1/4">
                    <Aside/>
                </div>
                <div className="hidden lg:block w-full basis-full lg:basis-3/4">
                    <TopBar />
                    <MainPage />
                </div>
                {/**Solución provisoria */}
                <div className="block lg:hidden">
                    <MainPage/>
                </div>
            </div>

        </div>
    );
}

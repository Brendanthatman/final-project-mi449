import msulogolight from '../../assets/msulogolightmode.png';
import msulogodark from '../../assets/msulogodarkmode.png';
import { useState, useEffect } from 'react';
import lightmodeicon from '../../assets/lightmodeicon.png';
import darkmodeicon from '../../assets/darkmodeicon.png';
import mapicon from '../../assets/mapicon.png';
import homeicon from '../../assets/homeicon.png';
import "./sidebar.css";

function SideBar () {
    const [msuLogo, setMsuLogo] = useState(msulogolight);
    const [mode, setMode] = useState(lightmodeicon);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setMsuLogo(theme === 'light' ? msulogodark : msulogolight);
        setMode(theme === 'light' ? darkmodeicon : lightmodeicon);  
    };

    return(
        <div className="sidebar fixed left-0 top-0 h-screen w-25 transition-colors duration-200">
            <div className="flex flex-col h-full justify-between py-4">
                <ul className="flex flex-col items-center space-y-3">
                    <li><a href="https://msu.edu/" className="p-2 rounded-lg">
                        <img src={msuLogo} alt="MSU Logo"  />
                    </a></li>
                    <li><a href="" className="p-2 rounded-lg">
                        <img src={homeicon} alt="Home" />
                    </a></li>
                    <li><a href="https://maps.app.goo.gl/bT3FFW5VWG4TSFow8" className=" rounded-lg">
                        <img src={mapicon} alt="Map" />
                    </a></li>
                </ul>
                <div className="flex justify-center">
                    <button onClick={toggleTheme} className="p-2 rounded-lg toggleBtn">
                        <img src={mode} alt="Theme toggle" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
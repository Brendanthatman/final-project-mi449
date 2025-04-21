import msulogolight from '../../assets/msulogolightmode.png';
import msulogodark from '../../assets/msulogodarkmode.png';
import { useState, useEffect } from 'react';
import './sidebar.css';
import '../../App.css';
import lightmodeicon from '../../assets/lightmodeicon.png';
import darkmodeicon from '../../assets/darkmodeicon.png';
import mapicon from '../../assets/mapicon.png';
import homeicon from '../../assets/homeicon.png';

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
        <div className="sidebar">
            <a href=""><img src={msuLogo} alt="" /></a>
            <a href=""><img src={homeicon} alt="" /></a>
            <a href=""><img src={mapicon} alt="" /></a>
            <button onClick={toggleTheme}><img src={mode} alt="" /></button>
        </div>
    );
}

export default SideBar;
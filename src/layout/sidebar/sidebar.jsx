import msulogolight from '../../assets/msulogolightmode.png';
import msulogodark from '../../assets/msulogodarkmode.png';
import { useState } from 'react';
import './sidebar.css';
import lightmodeicon from '../../assets/lightmodeicon.png';
import darkmodeicon from '../../assets/darkmodeicon.png';
import mapicon from '../../assets/mapicon.png';
import homeicon from '../../assets/homeicon.png';

function SideBar () {
    const [msuLogo, setMsuLogo] = useState(msulogolight);
    const [mode, setMode] = useState(lightmodeicon);

    return(
        <div>
            <a href=""><img src={msuLogo} alt="" /></a>
            <a href=""><img src={homeicon} alt="" /></a>
            <a href=""><img src={mapicon} alt="" /></a>
            <a href=""><img src={lightmodeicon} alt="" /></a>
            <a href=""><img src={darkmodeicon} alt="" /></a>
        </div>
    );
}

export default SideBar;
import React from 'react';
import "./quicklinks.css";
import "../../App.css";
import linkIcon from '../../assets/linkicon.png';

function QuickLinks () {
    return (
        <div className="quicklinks m-10">
            <h3 className='blockTitle w-50 p-2 '>Quick Links</h3>
            <ul className='blockContent p-5 w-3xs text-base text-left'>
                <li className='pb-2 flex items-start'>
                    <img src={linkIcon} className="w-6 h-6 mr-1" alt="Link Icon" />
                    <a href="https://d2l.msu.edu/d2l/home" target="_blank" rel="noopener noreferrer">D2L</a>
                </li>
                <li className='pb-2 flex items-start'>
                    <img src={linkIcon} className="w-6 h-6 mr-1" alt="Link Icon" />
                    <a href="https://lib.msu.edu/" target="_blank" rel="noopener noreferrer">MSU Library</a>
                </li>
                <li className='flex items-start'>
                    <img src={linkIcon} className="w-6 h-6 mr-1" alt="Link Icon" />
                    <a href="https://student.msu.edu/splash.html" target="_blank" rel="noopener noreferrer">SIS</a>
                </li>
            </ul>
        </div>
    );
}

export default QuickLinks;
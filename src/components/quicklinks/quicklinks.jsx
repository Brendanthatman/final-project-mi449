import React from 'react';
import "./quicklinks.css";

function QuickLinks () {
    return (
        <div className="quicklinks">
            <h3 className='urlTitle w-xs p-2'>Quick Links</h3>
            <ul className='urlContent p-5 w-2xs text-base'>
                <li className='pb-2'><a href="https://d2l.msu.edu/d2l/home">D2L</a></li>
                <li className='pb-2'><a href="https://lib.msu.edu/">MSU Library</a></li>
                <li><a href="https://student.msu.edu/splash.html">SIS</a></li>
            </ul>
        </div>
    );
}

export default QuickLinks;
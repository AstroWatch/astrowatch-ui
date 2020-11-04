import React from 'react';
import './App.css';
import Horoscope from '../Horoscope';

export default function App() {
    return (
        <div className="app">
            <div className="horoscope-container">
                <Horoscope />
            </div>
        </div>
    );
}

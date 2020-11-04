import React from 'react';
import './Horoscope.css';

function Horoscope() {
    return (
        <div className="horoscope-container">
            <div className="horoscope">
                <div className="hint-house-owner hint-top">
                    <span>Jupiter</span>
                    <span>Mars</span>
                    <span>Venus</span>
                    <span>Mercury</span>
                </div>

                <div className="hint-house-owner hint-bottom">
                    <span>Jupiter</span>
                    <span>Mars</span>
                    <span>Venus</span>
                    <span>Mercury</span>
                </div>

                <div className="hint-house-owner hint-left">
                    <span>Jupiter</span>
                    <span>Saturn</span>
                    <span>Saturn</span>
                    <span>Jupiter</span>
                </div>

                <div className="hint-house-owner hint-right">
                    <span>Mercury</span>
                    <span>Moon</span>
                    <span>Sun</span>
                    <span>Mercury</span>
                </div>
            </div>
        </div>
    );
}

export default Horoscope;

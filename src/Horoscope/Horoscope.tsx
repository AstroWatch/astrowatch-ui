import React from 'react';
import styled from 'styled-components';

import {SHADOW} from '../constant/css';
import HoroscopeBoard from '../HoroscopeBoard';
import './Horoscope.css';

const sideTrackWidth = '0.05fr';

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1em;
    margin: 5px;
    box-shadow: ${SHADOW.INSET};

    display: grid;
    grid-template-columns: ${sideTrackWidth} 1fr ${sideTrackWidth};
    grid-template-rows: ${sideTrackWidth} 1fr ${sideTrackWidth};
`;

function Horoscope() {
    return (
        <Container className="horoscope-container">
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

            <HoroscopeBoard/>
        </Container>
    );
}

export default Horoscope;

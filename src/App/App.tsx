import React from 'react';
import styled from 'styled-components';
import Horoscope from '../Horoscope';

const HoroscopeContainer = styled.div`
    width: 1000px;
    height: 1000px;
`;

export default function App() {
    return (
        <div className="app">
            <HoroscopeContainer>
                <Horoscope />
            </HoroscopeContainer>
        </div>
    );
}

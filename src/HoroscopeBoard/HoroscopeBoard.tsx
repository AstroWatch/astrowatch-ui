import React from 'react';
import styled from 'styled-components';

import {COLOR, SHADOW} from '../constant/css';

const Container = styled.div`
    grid-row: 2;
    grid-column: 2;
    box-shadow: ${SHADOW.SMALL};

    display: grid;
`;

const House = styled.div`
    padding: 1em;
`;

const AriesHouse = styled(House)`
    grid-row: 1;
    grid-column: 2;
    border-left: 0.1px solid ${COLOR.BORDER};
`;
const TaurusHouse = styled(House)`
    grid-row: 1;
    grid-column: 3;
    border-left: 0.1px solid ${COLOR.BORDER};
    border-right: 0.1px solid ${COLOR.BORDER};
`;
const GeminiHouse = styled(House)`
    grid-row: 1;
    grid-column: 4;
`;
const CancerHouse = styled(House)`
    grid-row: 2;
    grid-column: 4;
    border-top: 0.1px solid ${COLOR.BORDER};
`;
const LeoHouse = styled(House)`
    grid-row: 3;
    grid-column: 4;
    border-top: 0.1px solid ${COLOR.BORDER};
    border-bottom: 0.1px solid ${COLOR.BORDER};
`;
const VirgoHouse = styled(House)`
    grid-row: 4;
    grid-column: 4;
`;
const LibraHouse = styled(House)`
    grid-row: 4;
    grid-column: 3;
    border-left: 0.1px solid ${COLOR.BORDER};
    border-right: 0.1px solid ${COLOR.BORDER};
`;
const ScorpioHouse = styled(House)`
    grid-row: 4;
    grid-column: 2;
    border-left: none;
    border-bottom: none;
    border-left: 0.1px solid ${COLOR.BORDER};
`;
const SagittariusHouse = styled(House)`
    grid-row: 4;
    grid-column: 1;
    border-left: none;
`;
const CapricornHouse = styled(House)`
    grid-row: 3;
    grid-column: 1;
    border-top: 0.1px solid ${COLOR.BORDER};
    border-bottom: 0.1px solid ${COLOR.BORDER};
`;
const AquariusHouse = styled(House)`
    grid-row: 2;
    grid-column: 1;
    border-top: 0.1px solid ${COLOR.BORDER};
`;
const PiscesHouse = styled(House)`
    grid-row: 1;
    grid-column: 1;
`;
const CenterArea = styled(House)`
    border: 0.1px solid ${COLOR.BORDER};
    grid-row: 2 / span 2;
    grid-column: 2/ span 2;
`;

function HoroscopeBoard() {
    return (
        <Container className="horoscope-board">
            <AriesHouse>
                Ar
            </AriesHouse>
            <TaurusHouse>
                Ta
            </TaurusHouse>
            <GeminiHouse>
                Ge
            </GeminiHouse>
            <CancerHouse>
                Ca
            </CancerHouse>
            <LeoHouse>
                Le
            </LeoHouse>
            <VirgoHouse>
                Vi
            </VirgoHouse>
            <LibraHouse>
                Li
            </LibraHouse>
            <ScorpioHouse>
                Sc
            </ScorpioHouse>
            <SagittariusHouse>
                Sg
            </SagittariusHouse>
            <CapricornHouse>
                Cp
            </CapricornHouse>
            <AquariusHouse>
                Aq
            </AquariusHouse>
            <PiscesHouse>
                Pi
            </PiscesHouse>
            <CenterArea>
            </CenterArea>
        </Container>
    );
}

export default HoroscopeBoard;

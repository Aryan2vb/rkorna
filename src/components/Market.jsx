import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MarketCard = styled.div`
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Market = () => {
    return (
        <Container>
            <MarketCard>
                <span>Gold</span>
                <span>₹48550</span>
            </MarketCard>
            <MarketCard>
                <span>Silver</span>
                <span>₹71526</span>
            </MarketCard>
        </Container>
    );
};

export default Market;

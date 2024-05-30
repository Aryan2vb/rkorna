import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Products = () => {
    return (
        <Container>
            <h1>Products</h1>
            <p>Here are our products.</p>
        </Container>
    );
};

export default Products;

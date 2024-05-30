import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
`;

const Menu = () => {
    const handleClick = () => {
        window.location.href = 'https://shop.shreetrilochan.com/phr';
    };

    return (
        <Container>
            <h1>Menu</h1>
            <p>Check out our menu items here.</p>
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleClick}
            >
                Click here to view items

            </button>

        </Container>

    );
};

export default Menu;

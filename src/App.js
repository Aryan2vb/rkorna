import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Menu from './components/Menu';
import Products from './components/Products';
import Market from './components/Market';
import NavBar from './components/NavBar';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin-bottom: 60px; /* Space for the fixed NavBar */
`;

function App() {
    return (
        <Router>
            <NavBar />
            <AppContainer>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/menu" element={<Menu />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="/products" element={<Products />} />

                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;

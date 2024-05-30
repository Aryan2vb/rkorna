import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #282c34;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    a {
        color: white;
        text-decoration: none;
        &.active {
            font-weight: bold;
        }
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <NavList>
                <NavItem><NavLink to="/" exact>Home</NavLink></NavItem>
                <NavItem><NavLink to="/contacts">Contacts</NavLink></NavItem>
                <NavItem><NavLink to="/menu">Menu</NavLink></NavItem>
                <NavItem><NavLink to="/products">Products</NavLink></NavItem>
                <NavItem><NavLink to="/market">Market</NavLink></NavItem>
            </NavList>
        </Nav>
    );
};

export default NavBar;

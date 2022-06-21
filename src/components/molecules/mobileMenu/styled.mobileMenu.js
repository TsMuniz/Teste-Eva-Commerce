/* eslint-disable no-undef */
import styled from "styled-components";

const MenuMobileWrapper = styled.nav`
    opacity: 0.96;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--light-blue);
    padding: 0;
    overflow-y: hidden;
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem; 
    }
    a {
        font-family: 'Source Sans Pro' ,sans-serif;
        text-decoration: none;
        color: var(--gunmetal);
        font-size: 3.2rem;
    }
   
    ${({visible}) => !visible && `
    display: none
    ` }
`;

export default MenuMobileWrapper;
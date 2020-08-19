import styled from 'styled-components';

export const AreaSection = styled.header`
    background: transparent;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding: 20px 30px;
`;

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const AreaName = styled.div`
    z-index: 1;

    a {
        display: flex;
        align-items: center;
        flex-direction: row;

        text-decoration: none;
    }
`;

export const FirstName = styled.h3`
    color: #f0f0f5;
`;

export const SecondName = styled.h3`
    color: #F86D09;
    margin-left: 5px;
`;

export const NavBar = styled.div``;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: row;

    list-style: none;

    z-index: 1;
    position: relative;
    

    a {
        color: #f0f0f5;
        text-decoration: none;
        margin: 0px 15px;
    }   
`;
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

export const NavBar = styled.div`
    
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: row;

    list-style: none;

    z-index: 1;
    position: relative;

    li {
        margin-top: 10px;
       
        a {
            color: #f0f0f5;
            text-decoration: none;
            margin: 0px 15px;
        }
    }

    @media (max-width: 991px) {
        flex-direction: column;
        background: #222222;
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 180px;
        padding-top: 5.5rem;
        transform: ${props => props.isOpen === true ? 'translateX(100%)' : 'translateX(0)'};
        transition: transform 0.3s ease-in-out;
        display: ${props => props.isOpen === true ? 'none' : 'flex'};
    }
`;

export const Burger = styled.div`
    position: absolute;
    width: 2rem;
    height: 1.5rem;
    top: 25px;
    right: 40px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;

    div {
        width: 2rem;
        height: 0.25rem;
        background: #ffffff;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${props => props.isOpen === true ? 'rotate(45deg)' : 'rotate(0)' };
        }

        &:nth-child(2) {
            transform: ${props => props.isOpen === true ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${props => props.isOpen === true ? '0' : '1'};
        }

        &:nth-child(3) {
            transform: ${props => props.isOpen === true ? 'rotate(-45deg)' : 'rotate(0)' };
        }
    }

    @media (max-width: 991px) {
        display: flex;
    }
`;
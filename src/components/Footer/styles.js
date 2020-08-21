import styled from 'styled-components';

export const AreaSection = styled.section`
    background: #4a4a4a;
    float: left;
    width: 100vw;
    padding-top: 80px;
    padding-bottom: 20px;
`;

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

export const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 70px;
    color: #fefefe;

    text-transform: uppercase;
    letter-spacing: .5px;

    position: relative;

    &:before {
        content: '';
        position: absolute;
        width: 6rem;
        height: 0.2rem;
        left: 50%;
        top: 110%;
        margin-left: -50px;
        background-color: #fefefe;
    }
`;

export const Content = styled.div`
    float: left;
    width: 100%;

    padding-bottom: 30px;
`;

export const Box = styled.div`
    float: left;
    width: 33.33%;

    text-align: center;
    padding: 15px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Text = styled.h3`
    color: #f0f0f5;
    font-size: 1.1rem;
    text-transform: uppercase;
`;

export const Description = styled.span`
    color: #f5f5f5;
    font: 400 1.2rem Raleway;
`;

export const Social = styled.footer`
    float: left;
    width: 100%;
    text-align: center;

    padding: 20px 0px;

    ul {
        padding: 0;
        list-style: none;
        margin: 0;

        li {

            display: inline;

            a {
                display: inline-block;
                padding: 15px 15px;

                svg {
                    
                    &:hover {
                        fill: #F86D09;
                        transform: scale(1.4); 
                    }

                }
            }
        }
    }
`;

export const Thanks = styled.div`
    font: 400 1rem Poppins;
    color: #f5f5f5;
    text-align: center;

    a {
        text-decoration: none;
        color: #f5f5f5;

        transition: color .5s ease;

        &:hover {
            color: #F86D09;
        }
    }
`;

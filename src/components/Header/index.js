import React, { useState } from 'react';

import { AreaSection, Container, AreaName, FirstName, SecondName,
    NavBar, Menu, Burger
} from './styles';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenMenu() {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    
    return (
        <AreaSection>
            <Container>
                <AreaName>
                    <a href="">
                        <FirstName>Max</FirstName>
                        <SecondName>Dickinson</SecondName>
                    </a>
                </AreaName>

                <NavBar>
                    <a onClick={handleOpenMenu}>
                        <Burger isOpen={isOpen}>
                            <div />
                            <div />
                            <div />
                        </Burger>
                    </a>
                    

                    <Menu isOpen={isOpen}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </Menu>
                </NavBar>
            </Container>
        </AreaSection>
    );
}
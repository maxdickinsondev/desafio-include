import React, { useState } from 'react';

import { AreaSection, Container, AreaName, FirstName, SecondName,
    NavBar, Menu, Burger
} from './styles';

export default function Header() {
    const [isOpen, setIsOpen] = useState(true);

    function handleOpenMenu() {
        setIsOpen(!isOpen);
    }

    function handleReloadPage() {
        window.location.reload();
    }
    
    return (
        <AreaSection>
            <Container>
                <AreaName>
                    <a href="#home" onClick={handleReloadPage}>
                        <FirstName>Max</FirstName>
                        <SecondName>Dickinson</SecondName>
                    </a>
                </AreaName>

                <NavBar>
                    <a href="#home" onClick={handleOpenMenu}>
                        <Burger isOpen={isOpen}>
                            <div />
                            <div />
                            <div />
                        </Burger>
                    </a>
                    

                    <Menu isOpen={isOpen}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#soft">Soft</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </Menu>
                </NavBar>
            </Container>
        </AreaSection>
    );
}
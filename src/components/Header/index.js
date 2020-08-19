import React from 'react';

import { AreaSection, Container, AreaName, FirstName, SecondName,
    NavBar, Menu
} from './styles';

export default function Header() {
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
                    <Menu>
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
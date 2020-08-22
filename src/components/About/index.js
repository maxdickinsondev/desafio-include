import React from 'react';

import { AreaSection, Container, Title, Content,
    Image, Description, Name, Ocupation, Bio
} from './styles';

import myphoto from '../../assets/images/me.jpg';

export default function About() {
    return (
      <AreaSection id="about">
        <Container>
            <Title>About</Title>

            <Content>
                <Image 
                    src={myphoto}
                    alt="Max Dickinson"
                />

                <Description>
                    <Name>Max Dickinson</Name>
                    <Ocupation>React Developer</Ocupation>
                    <Bio>
                        Sou um apaixonado por tecnologia que está sempre em busca de novos conhecimentos, adoro resolver desafios e problemas com a
                        programação. Minha jornada acadêmica iniciou no ano de 2017 quando entrei no curso de Engenharia de Software pela Universidade 
                        Federal do Ceará. Me identifiquei com o curso logo de cara e hoje não me vejo sem. Recentemente me encontrei nesse
                        mundo web e mobile e atualmente venho me especializando na stack React + Node.
                    </Bio>
                </Description>
            </Content>
        </Container>
      </AreaSection>  
    );
}
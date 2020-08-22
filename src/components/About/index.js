import React from 'react';
import Fade from 'react-reveal/Fade';

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
                <Fade
                    top
                    delay={500}
                    duration={1300}
                >
                    <Image 
                        src={myphoto}
                        alt="Max Dickinson"
                    />
                </Fade>

                <Description>
                    <Fade
                        top
                        delay={500}
                        duration={1300}
                    >
                        <Name>Max Dickinson</Name>
                    </Fade>

                    <Fade
                        top
                        delay={400}
                        duration={1300}
                    >
                        <Ocupation>React Developer</Ocupation>
                    </Fade>
                    
                    <Fade
                        top
                        delay={300}
                        duration={1300}
                    >
                        <Bio>
                            Sou um apaixonado por tecnologia que está sempre em busca de novos conhecimentos, adoro resolver desafios e problemas com a
                            programação. Minha jornada acadêmica iniciou no ano de 2017 quando entrei no curso de Engenharia de Software pela Universidade 
                            Federal do Ceará. Me identifiquei com o curso logo de cara e hoje não me vejo sem. Recentemente me encontrei nesse
                            mundo web e mobile e atualmente venho me especializando na stack React + Node.
                        </Bio>
                    </Fade>
                </Description>
            </Content>
        </Container>
      </AreaSection>  
    );
}
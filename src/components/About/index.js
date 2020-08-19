import React from 'react';

import { AreaSection, Container, Title, Content,
    Image, Description, Name, Ocupation, Bio
} from './styles';

import myphoto from '../../assets/images/me.jpg';

export default function About() {
    return (
      <AreaSection>
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
                        Apaixonado por programação, procuro estudar mais e mais a cada dia para resolver 
                        problemas e programar soluções nas tecnologias mais atuais do mercado.
                    </Bio>
                </Description>
            </Content>
        </Container>
      </AreaSection>  
    );
}
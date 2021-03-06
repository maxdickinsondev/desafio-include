import React from 'react';
import Rotate from 'react-reveal/Rotate';

import { AreaSection, Container, Title, Content, Image,
    Card, Box, Text, Description
} from './styles';

import autodidata from '../../assets/images/softskills/aluno.png';
import curioso from '../../assets/images/softskills/curioso.png';
import team from '../../assets/images/softskills/team.png';

export default function SoftSkills() {
    return (
        <AreaSection id="soft">
            <Container>
                <Title>Soft Skills</Title>
                
                <Content>
                    <Card>
                        <Rotate
                            top left
                            delay={200}
                            duration={1500}
                        >
                            <Box>
                                <Image 
                                    src={autodidata}
                                    alt="Autodidata"
                                />
                                <Text>Autodidata</Text>
                                <Description>
                                    Estou sempre aprendendo algo novo, gosto de entender  a mecânica das coisas, como as coisas funcionam. 
                                </Description>
                            </Box>
                        </Rotate>
                    </Card>

                    <Card>
                        <Rotate
                            top left
                            delay={200}
                            duration={1500}
                        >
                            <Box>
                                <Image 
                                    src={curioso}
                                    alt="Curioso"
                                />
                                <Text>Curioso</Text>
                                <Description>
                                    Nem sempre teremos um mentor para nos auxiliar, buscar o conhecimento sozinho é algo necessário.
                                </Description>
                            </Box>
                        </Rotate>
                    </Card>

                    <Card>
                        <Rotate
                            top left
                            delay={200}
                            duration={1300}
                        >
                            <Box>
                                <Image 
                                    src={team}
                                    alt="team"
                                />
                                <Text>Trabalho em equipe</Text>
                                <Description>
                                    O trabalho em equipe é essencial na carreira de um dev, estamos sempre aprendendo com as pessoas. 
                                </Description>
                            </Box>
                        </Rotate>
                    </Card>
                </Content>
            </Container>
        </AreaSection>
    );
}
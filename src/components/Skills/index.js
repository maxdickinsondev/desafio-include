import React from 'react';

import { AreaSection, Container, Title,
    Image, Content, Card, Box, Tech
} from './styles';

import html from '../../assets/images/skills/html-5.png';
import css from '../../assets/images/skills/css.png';
import js from '../../assets/images/skills/js.png';
import react from '../../assets/images/skills/react.png';
import node from '../../assets/images/skills/nodejs.png';
import mysql from '../../assets/images/skills/mysql.png';

export default function Skills() {
    return (
      <AreaSection>
        <Container>
            <Title>Skills</Title>

            <Content>
                <Card>
                    <Box>
                        <Tech>HTML</Tech>
                        <Image 
                            src={html}
                            alt="HTML"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>CSS</Tech>
                        <Image 
                            src={css}
                            alt="HTML"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>Javascript</Tech>
                        <Image 
                            src={js}
                            alt="HTML"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>React</Tech>
                        <Image 
                            src={react}
                            alt="HTML"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>Node</Tech>
                        <Image 
                            src={node}
                            alt="HTML"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>MySql</Tech>
                        <Image 
                            src={mysql}
                            alt="HTML"
                        />
                    </Box>
                </Card>
            </Content>
        </Container>
      </AreaSection>  
    );
}
import React from 'react';

import { AreaSection, Container, Title,
    Image, Content, Card, Box, Tech
} from './styles';

import project1 from '../../assets/images/projects/portfolio1.png';
import project2 from '../../assets/images/projects/portfolio2.png';
import project3 from '../../assets/images/projects/portfolio3.png';
import project4 from '../../assets/images/projects/portfolio4.png';
import project5 from '../../assets/images/projects/portfolio5.png';
import project6 from '../../assets/images/projects/portfolio6.png';
import project7 from '../../assets/images/projects/portfolio7.png';
import project8 from '../../assets/images/projects/portfolio8.png';
import project9 from '../../assets/images/projects/portfolio9.png';

export default function Projects() {
    return (
      <AreaSection id="projects">
        <Container>
            <Title>Projects</Title>

            <Content>
                <Card>
                    <Box>
                        <Tech>FilmesMax</Tech>
                        <Image 
                            src={project1}
                            alt="seriesmax"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>GitProject</Tech>
                        <Image 
                            src={project2}
                            alt="gitproject"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>Be The Hero</Tech>
                        <Image 
                            src={project3}
                            alt="bethehero"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>Filmes Max</Tech>
                        <Image 
                            src={project4}
                            alt="filmesmax"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>GitProject</Tech>
                        <Image 
                            src={project5}
                            alt="gitproject"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>SeriesMax</Tech>
                        <Image 
                            src={project6}
                            alt="seriesmax"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>BancoInter App</Tech>
                        <Image 
                            src={project7}
                            alt="bancointer"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>Mercado Livre App</Tech>
                        <Image 
                            src={project8}
                            alt="mercadolivre"
                        />
                    </Box>
                </Card>

                <Card>
                    <Box>
                        <Tech>Proffy</Tech>
                        <Image 
                            src={project9}
                            alt="proffy"
                        />
                    </Box>
                </Card>
            </Content>
        </Container>
      </AreaSection>  
    );
}
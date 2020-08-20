import React from 'react';

import { AreaSection, Container, Content, Box,
    Text, Description, Title, Social
} from './styles';

import { FaPhone, FaEnvelope, FaMapMarker,
    FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaGitter
} from 'react-icons/fa';

export default function Footer() {
    return (
        <AreaSection>
            <Container>
                <Title>Contact</Title>

                <Content>
                    <Box>
                        <FaPhone color="#F86D09" size={25} />
                        <Text>Phone</Text>
                        <Description>+55 88 98105-2862</Description>
                    </Box>

                    <Box>
                        <FaEnvelope color="#F86D09" size={25} />
                        <Text>Email</Text>
                        <Description>maxsantistadickinson@gmail.com</Description>
                    </Box>

                    <Box>
                        <FaMapMarker color="#F86D09" size={25} />
                        <Text>Location</Text>
                        <Description>Russas, Ceará, Brasil</Description>
                    </Box>
                </Content>

                <Social>
                    <ul>
                        <li><a href="https://www.facebook.com/max.sousa.501" target="_blank"><FaFacebook color="#f5f5f5" size={25} /></a></li>
                        <li><a href="https://www.linkedin.com/in/maxdickinson/" target="_blank"><FaLinkedin color="#f5f5f5" size={25} /></a></li>
                        <li><a href="https://www.instagram.com/max_dickinson_/" target="_blank"><FaInstagram color="#f5f5f5" size={25} /></a></li>
                        <li><a href="https://github.com/maxdickinsondev" target="_blank"><FaGithub color="#f5f5f5" size={25} /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCGxj9W2avI5m48Zs-fDNI8Q/" target="_blank"><FaYoutube color="#f5f5f5" size={25} /></a></li>
                    </ul>
                </Social>
            </Container>
        </AreaSection>
    );
}
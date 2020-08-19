import React from 'react';

import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import About from '../../components/About';
import Skills from '../../components/Skills';

import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <Header />
            <Welcome />
            <About />
            <Skills />
        </Container>
    );
}
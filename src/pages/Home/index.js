import React from 'react';

import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import About from '../../components/About';
import SoftSkills from '../../components/SoftSkills';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <Header />
            <Welcome />
            <About />
            <SoftSkills />
            <Skills />
            <Projects />
            <Footer />
        </Container>
    );
}
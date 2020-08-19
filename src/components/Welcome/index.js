import React from 'react';

import { AreaSection, Container, AreaText, Text } from './styles';

export default function Welcome() {
    return (
        <AreaSection>
            <Container>
                <AreaText>
                    <Text>Olá</Text>
                    <Text>Seja bem-vindo</Text>
                    <Text>Venha me conheçer</Text>
                </AreaText>
            </Container>
        </AreaSection>
    );
}
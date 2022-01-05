import React from 'react';

// Styles
import { Container, Top, Logo, Title } from './styles';

// Assets
import logo from '~/assets/Nubank_Logo.png';

// Icons
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>David</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}

import React from 'react';
import { View, Text} from 'react-native';

 import { Container, Input, Button, TextButton, Logo } from './styles';

export default function login({ navigation }) {

    function handle(){
        navigation.navigate('Main')
    }

  return (
    <Container>
    <Logo>APP</Logo>
        <Input
            placeholder="username"
            placeholderTextColor="#ddd"
        />

        <Input
            placeholder="password"
            placeholderTextColor="#ddd"
            secureTextEntry={true}
        />
        <Button onPress={handle}>
            <TextButton>Login</TextButton>
        </Button>
    </Container>
  );
}

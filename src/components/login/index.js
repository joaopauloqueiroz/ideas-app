import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'
import { Container, Input, Button, TextButton, Logo, Error } from './styles';

export default function login({ navigation }) {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    async function login() {
        try {
            const response = await api.post('/users/login', { username, password })
            
            await AsyncStorage.setItem('@ideas:user', response.data.token)
            await AsyncStorage.setItem('@ideas:_id', response.data.user._id)
            navigation.navigate('Main')
        } catch (error) {
            console.log(error)
            setError(error.response.data.error)
        }
    }

  return (
    <Container>
    <Logo>APP</Logo>
        <Input
            placeholder="username"
            placeholderTextColor="#ddd"
            onChangeText={setUsername}
        />

        <Input
            placeholder="password"
            placeholderTextColor="#ddd"
            secureTextEntry={true}
            onChangeText={setPassword}
        />
        {error ? 
            <Error>{error}</Error>:
            null
        }
        <Button onPress={login}>
            <TextButton>Login</TextButton>
        </Button>
    </Container>
  );
}

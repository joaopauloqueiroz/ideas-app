import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'
// import { Text } from "react-native";
import { Formik } from 'formik';
import { Container, Input, Button, TextButton, Logo, Error, Text } from './styles';

function login({navigation, history}) {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
    }, [])

    const login = async () => {
        try {
            const response = await api.post('/users/login', { username, password })
            await AsyncStorage.setItem('@ideas:user', response.data.token)
            await AsyncStorage.setItem('@ideas:_id', response.data.user._id)
            setPassword('')
            setUsername('')
            navigation.navigate('SignedIn')
            
        } catch (error) {
            setError(error.response.data.error)
            // console.log(error.response)
        }
    }

  return (
    <Formik 
        initialValues={{email: '', password: ''}}
        onSubmit={login}>
    <Container>
    <Logo>APP</Logo>
        
        <Input
            placeholder="username"
            placeholderTextColor="#ddd"
            onChangeText={setUsername}
            value={username}
        />

        <Input
            placeholder="password"
            placeholderTextColor="#ddd"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
        />

        <Text onPress={() => navigation.navigate('Register')}>Sign Up</Text>
        {error ? 
            <Error>{error}</Error>:
            null
        }
        <Button onPress={login}>
            <TextButton>Login</TextButton>
        </Button>
    </Container>
    </Formik>
  );
}

export default login

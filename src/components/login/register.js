import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import { Container, Input, Button, TextButton, Logo, Error } from './styles';
import api from '../../services/api'
function register({navigation}) {

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    async function cadaster () {
        let form = {
            name: name,
            username: username,
            password: password
        }
        try {
            const response = await api.post('/users/create/', form)
            setPassword('')
            setUsername('')
            setName('')
            navigation.navigate('Login')
            
        } catch (error) {
            setError(error.response.data.error)
        }
    }

    return (
        <Container>
        <Logo>APP</Logo>
            <Input
                placeholder="name"
                placeholderTextColor="#ddd"
                onChangeText={setName}
                value={name}
            />

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
            {error ? 
                <Error>{error}</Error>:
                null
            }
            <Button onPress={cadaster}>
                <TextButton>Cadastrar</TextButton>
            </Button>
        </Container>
      );
}

export default register
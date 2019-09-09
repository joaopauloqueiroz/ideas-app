import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {Container, Input, Button, TextButton, Logo, Error} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';
function register({navigation}) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  async function cadaster() {
    let form = {
      name: name,
      username: username,
      password: password,
    };
    try {
      const response = await api.post('/users/create/', form);
      setPassword('');
      setUsername('');
      setName('');
      navigation.navigate('Login');
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  return (
    <Container>
      <View>
        <Image source={logo} style={{width: 80, height: 50}} />
      </View>
      <Input
        placeholder="name"
        placeholderTextColor="#ddd"
        onChangeText={setName}
        value={name}
        style={{
          borderBottomColor: '#cecece',
          borderBottomWidth: 1,
        }}
      />

      <Input
        placeholder="username"
        placeholderTextColor="#ddd"
        onChangeText={setUsername}
        value={username}
        style={{
          borderBottomColor: '#cecece',
          borderBottomWidth: 1,
        }}
      />

      <Input
        placeholder="password"
        placeholderTextColor="#ddd"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        style={{
          borderBottomColor: '#cecece',
          borderBottomWidth: 1,
        }}
      />
      {error ? <Error>{error}</Error> : null}
      <Button onPress={cadaster}>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Container>
  );
}

export default register;

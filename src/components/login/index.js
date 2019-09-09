import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import {View, Image} from 'react-native';
import logo from '../../assets/logo.png';
import {Formik} from 'formik';
import {
  Container,
  Input,
  Button,
  TextButton,
  Logo,
  Error,
  Text,
  Description,
  TextOr,
} from './styles';

function login({navigation, history}) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {}, []);

  const login = async () => {
    try {
      const response = await api.post('/users/login', {username, password});
      await AsyncStorage.setItem('@ideas:user', response.data.token);
      await AsyncStorage.setItem('@ideas:_id', response.data.user._id);
      setPassword('');
      setUsername('');
      navigation.navigate('SignedIn');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <Container>
      <View>
        <Image
          source={logo}
          style={{width: 80, height: 60, marginBottom: 10}}
        />
      </View>
      <Description style={{textAlign: 'left', width: '100%', paddingLeft: 13}}>
        Insira seus dados abaixo
      </Description>
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

      <Text
        onPress={() => navigation.navigate('Register')}
        style={{textAlign: 'left', width: '100%', paddingLeft: 13}}>
        Esqueceu sua senha?
      </Text>
      {error ? <Error>{error}</Error> : null}
      <Button onPress={login}>
        <TextButton>LOGAR</TextButton>
      </Button>
      <TextOr>OU</TextOr>
      <Button
        bgColor={'#ec71e5'}
        onPress={() => navigation.navigate('Register')}>
        <TextButton>CADASTRAR-SE</TextButton>
      </Button>
    </Container>
  );
}

export default login;

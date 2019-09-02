import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Container, Loader } from './styles';

export default function headers() {
  return (
   <Container>
      <ActivityIndicator size={'large'} color={'#DF4723'}/>
   </Container>
  );
}

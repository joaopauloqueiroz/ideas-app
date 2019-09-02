import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { createRootNavigator } from './auth';
import Loader from '../components/preloader'
export default class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        signed: false,
        signLoaded: false,
        control: false,
      }
      this.authemticate()
  }

  async authemticate() {
    let auth = await AsyncStorage.getItem('@ideas:_id')
    if(auth){
        this.setState({
            signed: true, 
            signLoaded: true,
            control: true
        })
    }else{
        this.setState({
            signed: false, 
            signLoaded: false,
            control: true
        })
    }
  }

  render() {
    const { signed, control } = this.state;
    const Layout = createRootNavigator(signed);
    return control ? <Layout /> : <Loader />;
  }
}
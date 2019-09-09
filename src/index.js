import React from 'react';
import Routes from './routes/';
import {StatusBar} from 'react-native';

function src() {
  return (
    <>
      <StatusBar barStyle="dark-content" animated={true} />
      <Routes />
    </>
  );
}

export default src;

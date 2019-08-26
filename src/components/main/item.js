import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text, GridItem, Button, ViewIcon, Description, TextButton, Input } from './styles';

export default function Item({item, mood, remove, icon }) {
    useEffect(() => {

    }, [icon])
  return (
    <GridItem key={item+'-'}>
            <Description>{item}</Description>

            <ViewIcon>
            <Icon name='mood'
                color={icon ? '#080' : '#ddd'}
                size={25}
                onPress={mood}
            />
            <Icon name='mood-bad'
                    color={!icon ? '#F45': '#ddd'}
                    size={25}
                    onPress={mood}
                />
            <Icon name='delete-forever'
                    color={'#ddd'}
                    size={25}
                    onPress={remove}
                />
            </ViewIcon>
        </GridItem>
  );
}

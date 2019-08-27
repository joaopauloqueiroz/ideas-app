import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {GridItem, ViewIcon, Description, DateItem, ViewItems } from './styles';

export default function Item({all, item, mood, remove, icon, date }) {
    
    useEffect(() => {
        all
    }, [icon])

  return (
    <GridItem key={item+'-'}>
            <Description>{item}</Description>
            <ViewItems>
                <ViewIcon>
                    <Icon name='mood'
                        color={icon ? '#080' : '#ddd'}
                        size={22}
                        onPress={mood}
                    />
                    <Icon name='mood-bad'
                            color={!icon ? '#F45': '#ddd'}
                            size={22}
                            onPress={mood}
                        />
                    <Icon name='delete-forever'
                            color={'#028'}
                            size={22}
                            onPress={remove}
                        />
                </ViewIcon>
                <DateItem>
                    {date}
                </DateItem>
            </ViewItems>
        </GridItem>
  );
}

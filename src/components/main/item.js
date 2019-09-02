import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment'
import { GridItem, ViewIcon, Description, DateItem, ViewItems } from './styles';

export default function Item({ item, remove, mood, mod }) {
    useEffect(() => {
        item
    }, [item])

  return (
    <GridItem style={{
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    }}>
        <Description>{item.text}</Description>
        <ViewItems>
            <ViewIcon>
                <Icon name='mood'
                    color={item.emotion ? '#080' : '#ddd'}
                    size={22}
                    onPress={mood}
                />
                <Icon name='mood-bad'
                        color={!item.emotion ? '#F45': '#ddd'}
                        size={22}
                        onPress={mod} 
                    />
                <Icon name='delete-forever'
                        color={'#028'}
                        size={22}
                        onPress={remove}
                    />
            </ViewIcon>
            <DateItem>
                {moment(item.date).format('DD/MM/YYYY HH:mm')}
            </DateItem>
        </ViewItems>
    </GridItem>
  );
}

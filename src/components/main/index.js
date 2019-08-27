import React, { useState, useEffect } from 'react';
import moment from 'moment'
// import { View } from 'react-native';
import Item from './item'
import { Container, Scroll, Text, GridItem, Button, ViewIcon, Description, TextButton, Input } from './styles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function main() {
  const [item, setItem] = useState('')
  const [field, setField] = useState([])

  useEffect(() => {
    field
  }, [field])

    function add(){
        if(item !== ""){
            let form = {
                text: item,
                emotion: true,
                date: moment(new Date()).format('DD-MM-YYYY')
            }
            setField([...field, form])
            setItem('') 
        }
        
    }

    function remove(i){
        field.splice(i, 1)
        setField([...field]) 
    }
    
    function mood(i) {
      let a = field
        a[i].emotion = !a[i].emotion;
      setField([...a])
    }

  return (
    <Container>
        <Text>Your Moments</Text>
      <Scroll>
            {
                field.map(( item, i ) => {
                    return <Item 
                              item={item.text} 
                              icon={item.emotion}
                              date={item.date}
                              key={i}
                              i={i}
                              all={item}
                              mood={() => mood(i)} 
                              remove={() => remove(i)}
                            />
                })
            }

          </Scroll>
        <Input 
            placeholder="Description of moments"
            value={item}
            onChangeText={setItem}
        />

        <Button onPress={add}>
            <TextButton>ADD</TextButton>
        </Button>
        
    </Container>
  );
}

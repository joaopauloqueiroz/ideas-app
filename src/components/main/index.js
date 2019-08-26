import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
import Item from './item'
import { Container, Text, GridItem, Button, ViewIcon, Description, TextButton, Input } from './styles';

export default function main() {
  const [item, setItem] = useState('')
  const [field, setField] = useState([])

  useEffect(() => {

  }, [field])

    function add(){
        if(item !== ""){
            let form = {
                text: item,
                emotion: true
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
        field[i].emotion = !field[i].emotion;
      setField(field)
    }
  return (
    <Container>
        <Text>Suas Tarefas</Text>
            {
                field.map(( item, i ) => {
                    return <Item 
                              item={item.text} 
                              key={i}
                              i={i}
                              mood={() => mood(i)} 
                              icon={item.emotion}
                              remove={() => remove(i)}
                            />
                })
            }
        <Input 
            placeholder="Descreva seu lembrete"
            value={item}
            onChangeText={setItem}
        />

        <Button onPress={add}>
            <TextButton>Adicionar</TextButton>
        </Button>
    </Container>
  );
}

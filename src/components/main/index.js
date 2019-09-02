import React, { useState, useEffect } from 'react';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, Text } from 'react-native';
import Item from './item'
import { Container, Scroll, GridItem, Button, ViewIcon, Description, TextButton, Input } from './styles';
import api from '../../services/api'

export default function main({ navigation }) {
  const [item, setItem] = useState('')
  const [field, setField] = useState([])
  const [id, setiId] = useState('')

  useEffect(() => {
    init()
  }, [])

  /**
   * Function load init ideas
   */
  async function init() {
  const id = await AsyncStorage.getItem('@ideas:_id')
  setiId(id)
    try {
      const response = await api.get('/get-all/'+id)
        setField(response.data)
    } catch (error) {
      console.log(error)
    }
}


/**
 * Functiona add new idea
 */
  async function add(){
        if(item !== ""){
            let form = {
                text: item,
                emotion: true,
                date: new Date(),
                user: id
            }
            try {
              const response = await api.post('/ideas/create', form)

                setField([...field, response.data])
                setItem('')
            } catch (error) {
              console.log(error)
            }
        }
        
  }

  async function update(form){
   try {
     const response = await api.put('/ideas/update', form)
   } catch (error) {
     console.log(error)
   }
    
  }

  /**
   * Funtion to delete idea
   * @param {int} i 
   * @param {ObjectId} _id 
   */
  async function remove(i){
   try {
     const response = await api.delete('/delete/'+field[i]._id)
     field.splice(i, 1)
     setField([...field]) 
   } catch (error) {
     console.log(error)
   }
  }
  
  /**
   * Function to update emotion
   * @param {int} i 
   * @param {boolean} motion 
   */
  async function mood(i, motion) {
    field[i].emotion = motion;
    setField([...field])
    await update(field[i])
  }

  async function exit(){
    await AsyncStorage.clear()
    navigation.navigate('Login')
    setField([])
  }
  return (
    <Container>
        <Text onPress={exit}>Sair</Text>
        <FlatList 
          data={field}
          keyExtractor={item => String(item._id)}
          renderItem={( {item, index } ) => {
          return <Item 
            key={index}
            item={item}
            remove={() => remove(index, item._id)}
            mood={() => mood(index, true)} 
            mod={() => mood(index, false)} 
            />
          }}
        />
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

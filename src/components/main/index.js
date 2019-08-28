import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { FlatList } from 'react-native';
import Item from './item'
import { Container, Scroll, Text, GridItem, Button, ViewIcon, Description, TextButton, Input } from './styles';
import api from '../../services/api'

export default function main() {
  const [item, setItem] = useState('')
  const [field, setField] = useState('')

  useEffect(() => {
    init()
  }, [])

  /**
   * Function load init ideas
   */
  async function init() {
    let id = '5d65575c383f336a674b128b'
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
                user: '5d65575c383f336a674b128b'
            }
            try {
              const response = await api.post('/ideas/create', form)
            } catch (error) {
              console.log(error)
            }
            setField([...field, form])
            setItem('') 
        }
        
  }

  /**
   * Funtion to delete idea
   * @param {int} i 
   * @param {ObjectId} _id 
   */
  async function remove(i, _id){
   try {
     const response = await api.delete('/delete/'+_id)
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
  }

  return (
    <Container>
        <Text>Your Moments</Text>
        <FlatList 
          data={field}
          keyExtractor={item => String(item.text)}
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

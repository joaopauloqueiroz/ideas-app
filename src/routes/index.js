import React , { useState, useEffect } from 'react'
import { createRootNavigator } from './auth'
import AsyncStorage from '@react-native-community/async-storage';

function Routes() {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        authenticate()
    }, [])

    async function authenticate(){
        let auth = await AsyncStorage.getItem('@ideas:_id')
        if(auth){
            setAuth(true)
        }else{
            setAuth(false)
        }
    }
    let Layout = createRootNavigator(auth);
    return ( Layout ? <Layout /> : null)
}
 
export default Routes
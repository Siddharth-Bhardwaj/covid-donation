import React from 'react';
import { StyleSheet, Text, View , Button ,AsyncStorage} from 'react-native';
import axios from 'axios'


const _logIn = async() => {

await AsyncStorage.setItem('UserToken','xyz')
const resp = await axios.get('https://127.0.0.1:3000/users')
console.log(resp)

}


function Login({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Page</Text>
        <Button title="Login" onPress={()=>{
          _logIn()
        }}></Button>
      </View>
    )
  }

  export default Login
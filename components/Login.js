import React from 'react';
import {UIManager,KeyboardAvoidingView, NativeModules, StatusBarIOS ,StyleSheet, Text, View ,Button, Alert , Image, Keyboard, Dimensions, TextInput , TouchableOpacity  ,TouchableWithoutFeedback} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardShift from './KeyboardShift'
const { StatusBarManager } = NativeModules



class Login extends React.Component
{

state = {
username : '',
password : '',
statusBarHeight : 0
};


// logIn = async () => {

//   var username = this.state.username;
//   var password = this.state.password;
//   // var url = "http://172.20.10.3:80/login/?username="+username+"&password="+password;
//   // var resp = await axios.get(url);
//   // console.log(resp);
//   console.log(this.state.username);
//   console.log(this.state.password);
//   this.props.navigation.dispatch(
//     CommonActions.reset({
//       index: 0,
//       routes: [
//         { name: 'Dashboard'
//         },
//       ],
//     })
//   );
//   }

//   componentDidMount () {
//     if (Platform.OS === 'ios') {
//       StatusBarManager.getHeight(response =>
//           this.setState({statusBarHeight: response.height})
//       )
//       this.listener = StatusBarIOS.addListener('statusBarFrameWillChange',
//         (statusBarData) =>
//           this.setState({statusBarHeight: statusBarData.frame.height})
//       )
//     }
//   }
  
//   componentWillUnmount () {
//     if (Platform.OS === 'ios' && this.listener) {
//       this.listener.remove()
//     }
//   }

// navSignUp = () => {
//   this.props.navigation.navigate('Sign Up');
// }

// navReset = () => {
// this.props.navigation.navigate('Reset');
// }

  render()
  {
    const backgroundColor = "#ff6257"
    return(
      <KeyboardShift>
        {()=>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex:1,backgroundColor:backgroundColor}}>
        
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>

          
          <Image source = {require('./../images/people.png')} style={{height:'70%',width:'40%'}}>
          </Image>
        
        </View>

      
        <View style={{flex:1}}>

      
        <View style={{flex:1.0,backgroundColor:backgroundColor,alignItems:'center'}}>
          <Text style={{fontSize:30,marginTop:10}}>DONATION APP</Text>
        </View>

      
        <View style={{flex:1,backgroundColor:backgroundColor,justifyContent:'space-between',alignItems:'center'}}> 

            <TextInput style={{height:'35%',width:'70%',borderWidth:1,borderRadius:10,paddingLeft:15,fontSize:20}} placeholder="Username"></TextInput>
            <TextInput style={{height:'35%',width:'70%',borderWidth:1,borderRadius:10,paddingLeft:15,fontSize:20}} placeholder="Password" secureTextEntry={true}></TextInput>

        </View>


        </View>

        <View style={{flex:1,backgroundColor:backgroundColor}}>

          <View style={{flex:1,backgroundColor:backgroundColor,alignItems:'center'}}>
            <TouchableOpacity style={{marginTop:20}}>
              <Text style={{fontSize:22,color:'white'}}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex:1,backgroundColor:backgroundColor,flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>

            <Text style={{marginBottom:10,fontSize:20,color:'white'}}>Don't have an account ? </Text>
            <TouchableOpacity style={{marginBottom:10}}>
              <Text style={{fontSize:19,color:'white'}}>
                Sign Up
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
      </TouchableWithoutFeedback>}
      </KeyboardShift>
    );
    }
};

export default Login;
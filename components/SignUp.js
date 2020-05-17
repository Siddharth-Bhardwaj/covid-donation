import React from 'react';
import { NativeModules, StatusBarIOS,StyleSheet, Text, View ,Button, Alert , Image, Dimensions, TextInput , TouchableOpacity , Keyboard ,TouchableWithoutFeedback } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { StatusBarManager } = NativeModules


class Signup extends React.Component
{
  state = {
    statusBarHeight : 0,
    username : '',
    password : '',
    email :  ''
};

  componentDidMount () {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(response =>
          this.setState({statusBarHeight: response.height})
      )
      this.listener = StatusBarIOS.addListener('statusBarFrameWillChange',
        (statusBarData) =>
          this.setState({statusBarHeight: statusBarData.frame.height})
      )
    }
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios' && this.listener) {
      this.listener.remove()
    }
  }

  signUp = async() => {
    console.log("Username : "+this.state.username)
    console.log("Password : "+this.state.password)
    console.log("Email : "+this.state.email)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!reg.test(this.state.email))
    {
      Alert.alert(
        "Incorrect E-mail",
        "The E-mail ID that you entered is invalid !",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok pressed")
          }
        ],
        { cancelable: false }
      );
      this.setState({username:'',email:'',password:''})
    }
    else
    {
    Alert.alert(
      "Account Registration",
      "Your account has been successfully created !",
      [
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed")
        }
      ],
      { cancelable: false }
    );
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Dashboard'
          },
        ],
      })
    );
  }
}

navLogIn = () => {
this.props.navigation.navigate('Login');
}

  render()
  {
    if(this.state.statusBarHeight==40)
    { 
      var height =  (Math.round(Dimensions.get('window').height))-(this.state.statusBarHeight)/2;
      var width = (Math.round(Dimensions.get('window').width))-(this.state.statusBarHeight)/2;
    }
    else
    {
      var height =  (Math.round(Dimensions.get('window').height))
      var width = (Math.round(Dimensions.get('window').width))
    }
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex:1,backgroundColor:'white'}}>
      <KeyboardAwareScrollView>
        <View>
          <Text style={{textAlign:'center',marginTop:height*0.13,fontSize:35}}>Marketplace</Text>
        </View>
        <View style={{alignItems:'center',marginTop:height*0.05}}>
        <Image
              style={{width : 75, height: 75}}
              source={require('./../images/marketplace.jpg')}
            />
        </View>
      <View style={{alignItems:'center',marginTop:height*0.10}}>
        <TextInput value={this.state.username} onChangeText={(text) => this.setState({username : text})} style={{height:40,backgroundColor:'white',borderBottomWidth:2,borderColor:'gray',width:width*0.85,fontSize:27}} placeholder="Username" placeholderTextColor="#949494"></TextInput>
      </View>
      <View style={{alignItems:'center',marginTop:height*0.05}}>
        <TextInput value={this.state.password} onChangeText={(text) => this.setState({password : text})} secureTextEntry={true} style={{height:38,backgroundColor:'white',borderBottomWidth:2,borderColor:'gray',width:width*0.85,fontSize:27}} placeholder="Password" placeholderTextColor="#949494"></TextInput>
      </View>
      <View style={{alignItems:'center',marginTop:height*0.05}}>
        <TextInput value={this.state.email} onChangeText={(text) => this.setState({email : text})} style={{height:38,backgroundColor:'white',borderBottomWidth:2,borderColor:'gray',width:width*0.85,fontSize:27}} placeholder="Email" placeholderTextColor="#949494"></TextInput>
      </View>
      <View style={{alignItems:'center',marginTop:height*0.075}}>
        <TouchableOpacity onPress={this.signUp} style={{borderWidth:1,width:width*0.3,borderRadius:5,height:height*0.05,backgroundColor:'#4a78ff',borderColor:'#4a78ff'}}>
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:20,textAlign:'center',color:'white'}}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignSelf:'center',marginTop:height*0.087}}>

        <Text style={{fontSize:18}}>Already have an account? </Text>
        <TouchableOpacity onPress={this.navLogIn}>
          <Text style={{fontSize:18,color:"#4a78ff"}}>Log In.</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
      </View>
      </TouchableWithoutFeedback>
    );
    }
};

export default Signup;
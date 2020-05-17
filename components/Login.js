import React from 'react';
import { NativeModules, StatusBarIOS ,StyleSheet, Text, View ,Button, Alert , Image, Keyboard, Dimensions, TextInput , TouchableOpacity  ,TouchableWithoutFeedback} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { StatusBarManager } = NativeModules



class Login extends React.Component
{

state = {
username : '',
password : '',
statusBarHeight : 0
};


logIn = async () => {

  var username = this.state.username;
  var password = this.state.password;
  // var url = "http://172.20.10.3:80/login/?username="+username+"&password="+password;
  // var resp = await axios.get(url);
  // console.log(resp);
  console.log(this.state.username);
  console.log(this.state.password);
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

navSignUp = () => {
  this.props.navigation.navigate('Sign Up');
}

navReset = () => {
this.props.navigation.navigate('Reset');
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
          <Text style={{textAlign:'center',marginTop:height*0.17,fontSize:35}}>Marketplace</Text>
        </View>
        <View style={{alignItems:'center',marginTop:height*0.05}}>
        <Image
              style={{width : 75, height: 75}}
              source={require('./../images/marketplace.jpg')}
            />
        </View>
      <View style={{alignItems:'center',marginTop:height*0.10}}>
        <TextInput value={this.state.username} onChangeText={(text) => this.setState({username: text})}  style={{height:40,backgroundColor:'white',borderBottomWidth:2,borderColor:'gray',width:width*0.85,fontSize:27,paddingBottom:10}} placeholder="Username" placeholderTextColor="#949494"></TextInput>
      </View>
      <View style={{alignItems:'center',marginTop:height*0.05}}>
        <TextInput value={this.state.password} onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} style={{height:42,backgroundColor:'white',borderBottomWidth:2,borderColor:'gray',width:width*0.85,fontSize:27,paddingBottom:10}} placeholder="Password" placeholderTextColor="#949494"></TextInput>
      </View>
      <View style={{alignItems:'center',marginTop:height*0.05}}>
        <TouchableOpacity onPress={this.logIn} style={{borderWidth:1,width:width*0.25,borderRadius:5,height:height*0.05,backgroundColor:'#4a78ff',borderColor:'#4a78ff'}}>
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:20,textAlign:'center',color:'white'}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:'center',marginTop:height*0.025}}>
        <TouchableOpacity onPress={this.navReset}><Text style={{fontSize:18,color:'gray'}}>Forgot your password?</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignSelf:'center',position:'absolute',top:height*0.94}}>

        <Text style={{fontSize:18}}>Don't have an account? </Text>
        <TouchableOpacity onPress={this.navSignUp}>
          <Text style={{fontSize:18,color:"#4a78ff"}}>Sign up.</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
      </View>
      </TouchableWithoutFeedback>
    );
    }
};

export default Login;
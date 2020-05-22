import React from 'react';
import { NativeModules, StatusBarIOS , ScrollView, Text, View ,Button, Alert , Image, Keyboard, Dimensions, TextInput , TouchableOpacity  ,TouchableWithoutFeedback} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { Formik } from 'formik'
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


const { StatusBarManager } = NativeModules
class Home extends React.Component {

state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    img: null
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

      logOut = async() => {
        this.props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Login'
                },
              ],
            })
          );
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
    return (
      
      <ScrollView style={{flex: 1, paddingTop:Constants.statusBarHeight+height*0.025, backgroundColor: 'white'}}>
        <View style={{alignItems: "center", paddingBottom: 0}}>
          <Text style={{fontSize: height*0.04}}>Donate</Text>
        </View>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={values => console.log(values)}
          style={{padding: 0}}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{marginTop: height*0.035}}>

              <View style={{paddingLeft: width*0.08, marginBottom: height*0.01}}>
                <Text style={{fontSize: height*0.019}}>Name</Text>
              </View>
              <View style={{alignItems:'center', paddingBottom: height*0.04}}>
                <TextInput value={this.state.name} onChangeText={(text) => this.setState({name: text})}  style={{height:height*0.06,backgroundColor:'white',borderBottomWidth:2, borderRadius: 5,borderColor:'#4a78ff',width:width*0.85,paddingLeft: width*0.05, fontSize: height*0.02}}></TextInput>
              </View>

              <View style={{paddingLeft: width*0.08, marginBottom: height*0.01}}>
                <Text style={{fontSize: height*0.019}}>Phone</Text>
              </View>
              <View style={{alignItems:'center', paddingBottom: height*0.04}}>
                <TextInput value={this.state.name} onChangeText={(text) => this.setState({name: text})}  style={{height:height*0.06,backgroundColor:'white',borderBottomWidth:2, borderRadius: 5,borderColor:'#4a78ff',width:width*0.85,paddingLeft: width*0.05, fontSize: height*0.02}}></TextInput>
              </View>
              
              <View style={{paddingLeft: width*0.08, marginBottom: height*0.01}}>
                <Text style={{fontSize: height*0.019}}>Address</Text>
              </View>
              <View style={{alignItems:'center', paddingBottom: height*0.04}}>
                <TextInput value={this.state.name} onChangeText={(text) => this.setState({name: text})}  style={{height:height*0.06,backgroundColor:'white',borderBottomWidth:2, borderRadius: 5,borderColor:'#4a78ff',width:width*0.85,paddingLeft: width*0.05, fontSize: height*0.02}}></TextInput>
              </View>
              
              <View style={{paddingLeft: width*0.08, marginBottom: height*0.01}}>
                <Text style={{fontSize: height*0.019}}>Field</Text>
              </View>
              <View style={{alignItems:'center', paddingBottom: height*0.04}}>
                <TextInput value={this.state.name} onChangeText={(text) => this.setState({name: text})}  style={{height:height*0.06,backgroundColor:'white',borderBottomWidth:2, borderRadius: 5,borderColor:'#4a78ff',width:width*0.85,paddingLeft: width*0.05, fontSize: height*0.02}}></TextInput>
              </View>

              


              <View style={{alignItems:'center',marginTop:height*0.05}}>
                <TouchableOpacity onPress={this.logIn} style={{borderWidth:1,width:width*0.45,borderRadius:5,height:height*0.05,backgroundColor:'#4a78ff',borderColor:'#4a78ff'}}>
                  <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:20,textAlign:'center',color:'white'}}>Make Donation</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      
    )
}
}

export default Home;
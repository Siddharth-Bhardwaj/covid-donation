import React from 'react';
import { NativeModules, StatusBarIOS ,StyleSheet, Text, View ,Button, Alert , Image, Keyboard, Dimensions, TextInput , TouchableOpacity  ,TouchableWithoutFeedback} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { StatusBarManager } = NativeModules


class Profile extends React.Component {

state = {
    statusBarHeight : 0,
    name : 'Sid'
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
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button title="Logout" onPress={this.logOut}></Button>
        </View>
    )
}
}

export default Profile;
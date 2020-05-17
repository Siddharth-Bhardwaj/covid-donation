import React from "react";
import {
  NativeModules,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { StatusBarManager } = NativeModules;

class Reset extends React.Component {
  state = {
    statusBarHeight: 0,
    username: "",
  };

  resetPassword = async () => {
    console.log("Entered username/email : " + this.state.username);
    Alert.alert(
      "Password Reset",
      "An email has been sent to your registered e-mail ID !",
      [
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed"),
        },
      ],
      { cancelable: false }
    );
    this.setState({ username: "" });
  };

  navLogIn = () => {
    this.props.navigation.navigate("Login");
  };

  componentDidMount() {
    if (Platform.OS === "ios") {
      StatusBarManager.getHeight((response) =>
        this.setState({ statusBarHeight: response.height })
      );

      this.listener = StatusBarIOS.addListener(
        "statusBarFrameWillChange",
        (statusBarData) =>
          this.setState({ statusBarHeight: statusBarData.frame.height })
      );
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "ios" && this.listener) {
      this.listener.remove();
    }
  }

  render() {
    if (this.state.statusBarHeight == 40) {
      var height =
        Math.round(Dimensions.get("window").height) -
        this.state.statusBarHeight / 2;
      var width =
        Math.round(Dimensions.get("window").width) -
        this.state.statusBarHeight / 2;
    } else {
      var height = Math.round(Dimensions.get("window").height);
      var width = Math.round(Dimensions.get("window").width);
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <KeyboardAwareScrollView>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: height * 0.17,
                  fontSize: 35,
                }}
              >
                Marketplace
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: height * 0.05 }}>
              <Image
                style={{ width: 120, height: 120 }}
                source={require("./../images/people.png")}
              />
            </View>
            <View style={{ alignItems: "center", marginTop: height * 0.15 }}>
              <TextInput
                value={this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
                style={{
                  height: 35,
                  backgroundColor: "white",
                  borderBottomWidth: 2,
                  borderColor: "gray",
                  width: width * 0.85,
                  fontSize: 27,
                  paddingBottom: 10,
                }}
                placeholder="Username or Email"
                placeholderTextColor="#949494"
              ></TextInput>
            </View>
            <View style={{ alignItems: "center", marginTop: height * 0.07 }}>
              <TouchableOpacity
                onPress={this.resetPassword}
                style={{
                  borderWidth: 1,
                  width: width * 0.25,
                  borderRadius: 5,
                  height: height * 0.05,
                  backgroundColor: "#4a78ff",
                  borderColor: "#4a78ff",
                }}
              >
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Reset
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: height * 0.217,
              }}
            >
              <Text style={{ fontSize: 18 }}>Already have an account? </Text>
              <TouchableOpacity onPress={this.navLogIn}>
                <Text style={{ fontSize: 18, color: "#4a78ff" }}>Log In.</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Reset;

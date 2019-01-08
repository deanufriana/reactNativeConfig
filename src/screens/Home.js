import React, { Component } from "react";
import { Text, Button, View } from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import { GET_USER } from "../redux/actions/user";
import { TextInput } from "react-native-gesture-handler";

class Home extends Component {
  handleGetState = () =>
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
      const { data } = response;
      this.props.dispatch(GET_USER(data));
    });

  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <View style={{alignContent: 'center', margin: 20}}>
          <Text style={{alignSelf:'center'}}> This is My Setting Framework </Text>
          {/* <TextInput placeholder='Username'/>
          <TextInput placeholder='Password'/>
          <Button onPres          <TextInput placeholder='Username'/>
          <TextInput placeholder='Password'/>
          <Button onPress={this.handleGetState} title="Button" />s={this.handleGetState} title="Button" /> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducers
});

export default connect(mapStateToProps)(Home);

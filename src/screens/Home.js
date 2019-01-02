import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import { GET_USER } from '../redux/actions/user';

class Home extends Component {

  handleGetState = () => (
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
      const { data } = response
      this.props.dispatch(GET_USER(data))
    })
  )


  render() {
    return (
      <View>
        <Text>{this.props.user.data.title}</Text>
        <Button onPress={this.handleGetState} title='Button'>
        </Button>
      </View>

    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducers
})

export default connect(mapStateToProps)(Home)
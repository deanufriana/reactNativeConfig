import Home from "./src/screens/Home";
import { createStackNavigator, createAppContainer } from "react-navigation";

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(App);
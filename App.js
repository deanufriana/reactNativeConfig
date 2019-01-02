import Home from './src/screens/Home'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const App = createStackNavigator(
    {
        Home: Home
    }
)

export default createAppContainer(App)
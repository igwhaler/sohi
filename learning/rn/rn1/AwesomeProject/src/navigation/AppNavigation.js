import {StackNavigator} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen'

const App = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
})

export default App
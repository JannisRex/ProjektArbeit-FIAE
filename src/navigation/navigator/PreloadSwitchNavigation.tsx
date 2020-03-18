import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../../screens/home/HomeScreen.tsx'
import LoadingScreen from '../../screens/_LoadingScreen/main'

export default createAppContainer(createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: HomeScreen
  },
  {
    initialRouteName: 'Loading',
    backBehavior: 'none'
  }
))
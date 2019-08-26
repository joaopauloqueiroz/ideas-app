import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Login from '../components/login'
import Main from '../components/main'
import Header from '../components/headers'
const Routes = createAppContainer(
    createStackNavigator({
        Login: Login,
        Main
    }, {
        initialRouteName: 'Main'
    })
)

export default Routes
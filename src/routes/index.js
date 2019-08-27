import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions';
import Login from '../components/login'
import Main from '../components/main'

const Routes = createAppContainer(
    createStackNavigator({
        Login: { screen: Login, navigationOptions: { header: null} },
        Main: { screen: Main, navigationOptions: { 
            headerStyle: {
                backgroundColor: '#ddd',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            }
        } }
    }, {
        transitionConfig: NavigationConfig,
        initialRouteName: 'Login',
    })
)

const BottomTransition = (index, position, height) => {
    const sceneRange = [index - 1, index];
    const outputHeight = [height, 0];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputHeight
    });

    return {
        transform: [{translateY: transition}]
    }
}

const FadeTransition = (index, position) => { 
    const sceneRange = [index - 2, index];
    const outputOpacity = [0, 2];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputOpacity
    });

    return {
        opacity: transition
    }
}

const NavigationConfig = () => {
    return {
        screenInterpolator: (sceneProps) => {
            const position = sceneProps.position;
            const scene = sceneProps.scene;
            const index = scene.index;
            const height = sceneProps.layout.initHeight;

            // return BottomTransition(index, position, height);
            return FadeTransition(index, position)
        }
    }
 }
 
export default Routes
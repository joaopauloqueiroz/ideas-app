import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Login from '../components/login';
import Register from '../components/login/register';
import Logged from '../components/main';
export const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },

  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
});

export const SignedInRoutes = createStackNavigator({
  Logged: {
    screen: Logged,
    navigationOptions: {
      header: null,
    },
  },
});

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: {screen: SignedInRoutes},
        SignedOut: {screen: SignedOutRoutes},
      },
      {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
        // navigationOptions: {
        //   gesturesEnabled: false
        // }
      },
    ),
  );
};

const BottomTransition = (index, position, height) => {
  const sceneRange = [index - 1, index];
  const outputHeight = [height, 0];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputHeight,
  });

  return {
    transform: [{translateY: transition}],
  };
};

const FadeTransition = (index, position) => {
  const sceneRange = [index - 2, index];
  const outputOpacity = [0, 2];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity,
  });

  return {
    opacity: transition,
  };
};

const NavigationConfig = () => {
  return {
    screenInterpolator: sceneProps => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      const height = sceneProps.layout.initHeight;

      // return BottomTransition(index, position, height);
      return FadeTransition(index, position);
    },
  };
};

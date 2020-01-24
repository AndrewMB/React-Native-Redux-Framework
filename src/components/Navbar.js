import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';

/**
 * Uses ReactNavigation`
 * https://reactnavigation.org/docs/en/stack-navigator.html
 */

const stackNavigator = new createStackNavigator ({
    // TODO this lame shit is throwing an error when you add a navbarright or navbarleft component
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            title: 'Soapbox',
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Soapbox'
        }
    }
})

export default NavBar = createAppContainer(stackNavigator)
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faCog} from '@fortawesome/free-solid-svg-icons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppContainer = createStackNavigator({
  default: createBottomTabNavigator(
    {
      Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={faHome} size={32} color={tintColor} />
          ),
        },
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={faCog} size={32} color={tintColor} />
          ),
        },
      },
    },
    {
      navigationOptions: {
        headerShown: false,
      },
      tabBarOptions: {
        activeTintColor: '#82B1FF',
        inactiveTintColor: '#B8BBC4',
        showLabel: false,
      },
    },
  ),
});

const AuthStack = createStackNavigator({
  Login: {screen: LoginScreen, navigationOptions: {headerShown: false}},
  Register: {screen: RegisterScreen, navigationOptions: {headerShown: false}},
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

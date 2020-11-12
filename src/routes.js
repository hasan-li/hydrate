import React from 'react';
import {
  StyleSheet, Platform, Image, Text, View,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Loading from './components/Loading/Loading';
import Application from './screens/Application/Application';
import Auth from './screens/Auth/Auth';
import Main from './screens/Main/Main';

// const Routes = SwitchNavigator(
//   {
//     Application,
//     Auth,
//     Main,
//   },
//   {
//     initialRouteName: 'Application',
//   },
// );

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Application,
      Auth,
      Main,
    },
    {
      initialRouteName: 'Application',
    },
  ),
);

export default Routes;

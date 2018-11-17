/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './components/Home';
import { createStackNavigator } from 'react-navigation';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';

export default createStackNavigator ({
  home: Home,
  dashboard: Dashboard,
  chat: Chat
})


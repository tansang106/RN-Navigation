import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';
import Chat from '../Chat';
import Users from '../Users';
import Profile from '../Profile';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

export default createMaterialBottomTabNavigator ({
    User: {
        screen: Users,
        navigationOptions: {
            tabBarLabel: 'Users',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-contacts" color={tintColor} size={24}/>
            ),
           
        },
        
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-chatboxes" color={tintColor} size={24}/>
            )
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-cog" color={tintColor} size={24}/>
            ),
            // header: {
            //     visible: false,
            //   },
        },
       
    },
}, {
    initalRouteName: 'User',
    shifting: true
    // order: ['User', 'Chat', 'Profile']
})

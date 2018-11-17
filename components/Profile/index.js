import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import User from '../Users'
import Chat from '../Chat'


const AppDrawerNavigator = createDrawerNavigator({
    User: User,
    Chat: Chat
})

export default class Profile extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <AppDrawerNavigator />
        )
    }
}
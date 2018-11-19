import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
var FBLoginButton = require('../FBLoginButton');
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDGHv1ykuKaLok2NjTYSZQmmf-mmnqmuO4",
    authDomain: "chat-fa621.firebaseapp.com",
    databaseURL: "https://chat-fa621.firebaseio.com",
    projectId: "chat-fa621",
    storageBucket: "chat-fa621.appspot.com",
    messagingSenderId: "567933976367"
};
firebase.initializeApp(config);

type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = {
        header: null
    }
    
    onClick = () => {
        console.log('CLick')
    }

    render() {
        console.log('vao render')
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login With FaceBook</Text>
                {/* <FBLoginButton 
                    navigation = {this.props.navigation.navigate('dashboard')}
                /> */}
                <LoginButton
                    readPermissions={["email", "user_photos"]}
                    onLoginFinished={
                        async (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                // alert("Login was successful with permissions: " + result.grantedPermissions)
                                const tokenData = await AccessToken.getCurrentAccessToken();
                                const token = tokenData.accessToken.toString();
                                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                                const user = await firebase.auth().signInWithCredential(credential);
                                console.log('user', user)
                                firebase.database().ref(`/users/${user.uid}/profile`).set({
                                    name: user.displayName,
                                    email: user.email,
                                    avatar: user.photoURL
                                });
                                this.props.navigation.navigate('dashboard')

                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")} />
                <Button title="Go dashboard" onPress={() => this.props.navigation.navigate('dashboard')}></Button>
                <Button title="Click" onPress={this.onClick}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

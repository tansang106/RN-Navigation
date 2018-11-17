import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
var FBLoginButton = require('../FBLoginButton');
import { LoginButton } from 'react-native-fbsdk';


type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login With FaceBook</Text>
                {/* <FBLoginButton 
                    navigation = {this.props.navigation.navigate('dashboard')}
                /> */}
                <LoginButton
                    readPermissions={["email", "user_photos"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                // alert("Login was successful with permissions: " + result.grantedPermissions)
                                this.props.navigation.navigate('dashboard')
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")} />
                <Button title="Go dashboard" onPress={() => this.props.navigation.navigate('dashboard')}></Button>
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

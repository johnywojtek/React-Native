import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import Main from './App/Components/Main';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

export default class App extends Component {
    render() {
        return (
            //works only in iOS
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Notetaker',
                    component: Main
                }}
            />
        );
    }
}

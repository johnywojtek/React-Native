import React, { Component } from 'react';
import { View, StyleSheet, WebView } from 'react-native';
import PropTypes from 'prop-types';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    }
});

export default class Web_View extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{ uri: this.props.url }} />
            </View>
        );
    }
}

Web_View.propTypes = {
    url: PropTypes.string.isRequired
};

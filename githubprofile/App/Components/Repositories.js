import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import Badge from './Badge';
import Separator from './Helpers/Separator';
import PropTypes from 'prop-types';
import Web_View from './Helpers/Web_View';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default class Repositories extends Component {
    openPage(url) {
        this.props.navigator.push({
            title: 'Web View',
            component: Web_View,
            passProps: { url }
        });
    }
    render() {
        const repos = this.props.repos;
        const list = repos.map((item, index) => {
            // check if there are any description
            const desc = repos[index].description ? (
                <Text style={styles.description}>
                    {repos[index].description}
                </Text>
            ) : (
                <View />
            );

            return (
                <View key={index}>
                    <View>
                        <TouchableHighlight
                            underlayColor="black"
                            onPress={this.openPage.bind(
                                this,
                                repos[index].html_url
                            )}>
                            <Text style={styles.name}>{repos[index].name}</Text>
                        </TouchableHighlight>
                        <Text>Stars: {repos[index].stargazers_count}</Text>
                        {desc}
                    </View>
                    <Separator />
                </View>
            );
        });
        return (
            <ScrollView>
                <Badge userInfo={this.props.userInfo} />
                {list}
            </ScrollView>
        );
    }
}

Repositories.propTypes = {
    userInfo: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
};

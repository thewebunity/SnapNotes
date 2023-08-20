import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const PageViewer = ({route}) => {
    const {link} = route.params;
    return (
        <WebView source={{ uri: link }} />
    );
}

const styles = StyleSheet.create({})

export default PageViewer;

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.header, styles.fontSizeLarge]}> My Info </Text>
            </View>
            <View style={styles.fillerContainer}>
                <Text style={styles.transaction}>Transaction History </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
    },
    fontSizeLarge: {
        fontSize: '20px',
    },
    transaction: {
        color: 'green',
        alignSelf: 'left',
    },
    fillerContainer: {
        backgroundColor: '#B3E6B5',
        width: '150px',
        height: '60px',
        borderRadius: '8px',
    },
    headerContainer: {
        backgroundColor: 'beige',
        height: 50,
        width: 340,
    },
});
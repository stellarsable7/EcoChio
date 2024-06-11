import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RewardsScreen() {
    const handleInfoPress = () => {
        alert('This shows the points you have earned.');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Vouchers</Text>
                <Text style={styles.buttonNumber}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Points</Text>
                <View style={styles.pointsContainer}>
                    <Text style={styles.buttonNumber}>100</Text>
                    <Ionicons
                        name="information-circle-outline"
                        size={24}
                        color="black"
                        onPress={handleInfoPress}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    button: {
        backgroundColor: '#CCD5AE',
        padding: 30,
        margin: 10,
        borderRadius: 10,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
    buttonNumber: {
        color: 'black',
        fontSize: 18,
        marginRight: 10,
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});


import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/ecochioicon.png')} style={styles.ecochioicon} />
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Username:</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inpootContainer}>
                <Text style={styles.label}>Password:</Text>
                <TextInput style={styles.input} secureTextEntry />
            </View>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <Button title="Sign In" style={styles.button} onPress={() => navigation.navigate("HomeScreen")} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFAE0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    ecochioicon: {
        width: 220,
        height: 220,
        top: -100,
        marginBottom: 0,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 20,
        top: -60,
    },
    inpootContainer: {
        width: '100%',
        marginBottom: -10,
        paddingHorizontal: 20,
        paddingBottom: 0,
        top: -60,
    },
    label: {
        fontSize: 18,
        marginBottom: 0,
        color: '#4D4D4D',
    },
    input: {
        width: '100%',
        padding: 10,
        backgroundColor: '#E9EDC9',
        borderRadius: 5,
        fontSize: 16,
        color: '#4D4D4D',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        paddingtop: 0,
        paddingRight: 20,
        color: '#4D4D4D',
        top: -45,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        bottom: -10,
    },
    button: {
        backgroundColor: '#CCD5AE',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%',
    },
    buttonText: {
        fontSize: 16,
        color: '#4D4D4D',
    },
});

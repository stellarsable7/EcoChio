import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons icon
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons icon
import { SimpleLineIcons } from '@expo/vector-icons'; // Import SimpleLineIcons icon

export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.fillerContainer}>
                    <AntDesign name="clockcircleo" size={30} color="black" style={styles.icon} paddingRight={2} />
                    <Text style={[styles.transaction, styles.leftAlign]}>Transaction History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fillerContainer}>
                    <AntDesign name="user" size={26} color="black" style={styles.icon} />
                    <Text style={styles.linked}>Linked       Accounts</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bannerContainer}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="information-circle-outline" size={24} color="black" style={styles.icon} />
                    <Text style={[styles.bannerText, styles.leftAlign]}>About EcoChio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <MaterialIcons name="lock-reset" size={24} color="black" style={styles.icon} />
                    <Text style={[styles.bannerText, styles.leftAlign]}>Reset Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <SimpleLineIcons name="settings" size={24} color="black" style={styles.icon} />
                    <Text style={[styles.bannerText, styles.leftAlign]}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerContainer: {
        marginTop: 20,
        backgroundColor: 'beige',
        width: '100%',
        height: 80,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
    },
    bannerContainer: {
        marginTop: 40,
        backgroundColor: 'beige',
        width: '80%',
        height: 'auto',
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bannerText: {
        color: 'black',
        fontWeight: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
    },
    fillerContainer: {
        backgroundColor: '#b3b78b',
        flexDirection: 'row',
        alignItems: 'center',
        width: '35%',
        height: 60,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
    },
    transaction: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
        paddingRight: 5,
    },
    linked: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
    },
    leftAlign: {
        textAlign: 'left',
    },
    button: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'beige',
        padding: 15,
        borderRadius: 8,
        marginVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
});
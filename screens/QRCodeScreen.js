import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const qrSize = Math.min(width, height) * 0.7;

export default function QRCodeScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isFocused, setIsFocused] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useFocusEffect(
        useCallback(() => {
            // Screen is focused
            setIsFocused(true);

            return () => {
                // Screen is unfocused
                setIsFocused(false);
            };
        }, [])
    );

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>
        );
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
                <Button
                    title="Allow Camera"
                    onPress={async () => {
                        const { status } = await Camera.requestCameraPermissionsAsync();
                        setHasPermission(status === 'granted');
                    }}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {isFocused && (
                <View style={styles.cameraContainer}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle} />
                    </View>
                </View>
            )}
            {scanned && (
                <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
            )}
        </View>
    );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    rectangle: {
        height: qrSize,
        width: qrSize,
        borderWidth: 2,
        borderColor: '#1A8AF3',
        backgroundColor: 'transparent',
    },
});
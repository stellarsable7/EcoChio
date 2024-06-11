import * as React from 'react';
import { Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StoreDetailsScreen() {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('SustainInfoScreen')}>
                <Text>hi</Text>
            </TouchableOpacity>
        </View>
    )
};
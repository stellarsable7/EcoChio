import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([
        { id: '1', title: 'Haikini', image: require('./assets/haikini.png'), price: '$ $ $', ecoRating: 4 },
        { id: '2', title: 'By Invite Only', image: require('./assets/byinviteonly.png'), price: '$ $', ecoRating: 4 },
        { id: '3', title: 'Step of Grace', image: require('./assets/stepofgrace.png'), price: '$ $ $', ecoRating: 4 },
    ]);

    console.log('Data:', data);

    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.logo} />
            <View style={styles.itemTextContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{'🌱'.repeat(item.ecoRating)} {item.price}</Text>
            </View>
        </View>
    );

    const handleStoresPress = () => {
        alert('Stores we Love button pressed!');
    };

    const handleExplorePress = () => {
        alert('Explore Stores button pressed!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                    placeholderTextColor="gray"
                />
                <Ionicons name="ios-search" size={24} color="gray" style={styles.searchIcon} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleStoresPress} style={[styles.button, styles.leftButton]}>
                    <Text style={styles.buttonText}>Stores we Love</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleExplorePress} style={[styles.button, styles.rightButton]}>
                    <Text style={styles.buttonText}>Explore Stores</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9EDC9',
        alignItems: 'center',
        paddingTop: 50,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCD5AE',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '90%',
        marginVertical: 20,
    },
    searchBar: {
        height: 40,
        flex: 1,
        fontSize: 18,
    },
    searchIcon: {
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        width: '90%',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    leftButton: {
        backgroundColor: '#CCD5AE',
        marginRight: 5,
    },
    rightButton: {
        backgroundColor: '#FEFAE0',
        marginLeft: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    list: {
        width: '90%',
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
    },
    itemTextContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

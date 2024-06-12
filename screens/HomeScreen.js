import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Icon from 'react-native-vector-icons/Ionicons';

const placesData = [
    { id: '1', title: 'Haikini', rating: 4.5, price: '$$', image: require('../screens/assets/haikini.png') },
    { id: '2', title: 'By Invite Only', rating: 4.0, price: '$$', image: require('../screens/assets/byinviteonly.png') },
    { id: '3', title: 'Step of Grace', rating: 4.2, price: '$$$', image: require('../screens/assets/stepofgrace.png') },
    // Add more items as needed
];

export default function HomeScreen({ navigation }) {
    const handlePress = (item) => {
        switch (item.title) {
            case 'Haikini':
                navigation.navigate('Haikini', { storeId: item.id, storeName: item.title });
                break;
            case 'By Invite Only':
                navigation.navigate('By Invite Only', { storeId: item.id, storeName: item.title });
                break;
            case 'Step of Grace':
                navigation.navigate('Step of Grace', { storeId: item.id, storeName: item.title });
                break;
            default:
                break;
        }
    };

    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(placesData);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        handleSearch(searchText);
    }, [searchText]);

    const handleSearch = (text) => {
        setSearchText(text);
        if (text) {
            const newData = placesData.filter(item => {
                const itemData = item.title.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
        } else {
            setFilteredData(placesData);
        }
    };




    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemRating}>Rating: {item.rating} ★</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={handleSearch}
                />
                <TouchableOpacity style={styles.searchIcon}>
                    <Icon name="search" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <SegmentedControl
                values={['Stores we Love', 'Browse all stores']}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                style={styles.segmentedControl}
            />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCD5AE',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    searchIcon: {
        marginLeft: 10,
    },
    segmentedControl: {
        margin: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
    item: {
        flexDirection: 'row',
        height: 110,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#CCD5AE',
        borderRadius: 5,
        top: 30,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginRight: 10,
    },
    itemInfo: {
        justifyContent: 'center',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemRating: {
        color: '#888',
    },
    itemPrice: {
        color: '#888',
    },
});
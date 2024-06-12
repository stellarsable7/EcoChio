import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Icon from 'react-native-vector-icons/Ionicons';



const storesList = [
    { title: 'SHEIN', price: '$', rating: 0, image: require("../screens/assets/shein.png") },
    { title: 'By Invite Only', price: '$$', rating: 3, image: require('../screens/assets/byinviteonly.png') },
    { title: 'MGP Label', price: '$$', rating: 3, image: require('../screens/assets/mgp.png') },
    { title: 'Uniqlo', price: '$$', rating: 3, image: require('../screens/assets/uniqlo.png') },
    { title: 'Step of Grace', price: '$$$', rating: 4, image: require('../screens/assets/stepofgrace.png') },
    { title: 'Cotton On', price: '$$$', rating: 2, image: require('../screens/assets/cottonon.png') },
    { title: 'Haikini', price: '$$$$', rating: 4, image: require('../screens/assets/haikini.png') },
    { title: 'Beyond the Vines', price: '$$$$', rating: 3, image: require('../screens/assets/beyondthevines.png') },
];

const placesData = [
    {
        id: "1",
        title: "Haikini",
        rating: 4,
        price: "$$$$",
        image: require("../screens/assets/haikini.png"),
    },
    {
        id: "2",
        title: "By Invite Only",
        rating: 3,
        price: "$$",
        image: require("../screens/assets/byinviteonly.png"),
    },
    {
        id: "3",
        title: "Step of Grace",
        rating: 4,
        price: "$$$",
        image: require("../screens/assets/stepofgrace.png"),
    },
];

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(placesData);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [stores, setStores] = useState(storesList)

    useEffect(() => {
        handleSearch(searchText);
    }, [searchText]);

    const handleSearch = (text) => {
        setSearchText(text);
        if (text) {
            const newData = placesData.filter((item) => {
                const itemData = item.title.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
        } else {
            setFilteredData(placesData);
        }
    };

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
            case 'Uniqlo':
                navigation.navigate('Uniqlo', { storeId: item.id, storeName: item.title });
                break;
            case 'MGP Label':
                navigation.navigate('MGP Label', { storeId: item.id, storeName: item.title });
                break;
            case 'SHEIN':
                navigation.navigate('SHEIN', { storeId: item.id, storeName: item.title });
                break;
            case 'Cotton On':
                navigation.navigate('Cotton On', { storeId: item.id, storeName: item.title });
                break;
            default:
                break;
        }
    };




    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemRating}>Sustainability rating: {item.rating} 🌿</Text>
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
                values={["Stores we Love", "Browse all stores"]}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                style={styles.segmentedControl}
            />

            {selectedIndex === 0 && (
                <View style={styles.content}>
                    <FlatList
                        data={filteredData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.list}
                    />
                </View>
            )}
            {selectedIndex === 1 && (

                <View style={styles.content}>
                    {/* <Text>Hello {stores.map((i) => i.name)}</Text> */}
                    <FlatList
                        data={stores}
                        renderItem={renderItem}
                        keyExtractor={(stores) => stores.id}
                        contentContainerStyle={styles.list}
                    />
                </View>
                // <ScrollView style={styles.container}>
                //     {stores.map((store, index) => (
                //         <TouchableOpacity
                //             key={index}
                //             style={styles.storeContainer}
                //             onPress={() => navigation.navigate("")}

                //         >
                //             <Image source={store.image} style={styles.itemImage} />
                //             <View style={styles.itemInfo}>
                //                 <Text style={styles.itemTitle}>{store.name}</Text>
                //                 <Text style={styles.itemRating}>Rating: {store.rating} ★</Text>
                //                 <Text style={styles.itemPrice}>{store.price}</Text>
                //             </View>
                //         </TouchableOpacity>
                //     ))}
                // </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CCD5AE",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    searchIcon: {
        marginLeft: 10,
    },
    segmentedControl: {
        margin: 10,
    },
    list: {
        paddingHorizontal: 10,
        height: 1200,
    },
    item: {
        flexDirection: "row",
        height: 110,
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#CCD5AE",
        borderRadius: 5,
        top: 30,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginRight: 10,

    },
    itemInfo: {
        justifyContent: "center",
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    itemRating: {
        color: "#888",
    },
    itemPrice: {
        color: "#888",
    },
    storeContainer: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10
    }
});

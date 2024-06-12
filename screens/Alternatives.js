import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';


const stores = [
    { id: 1, name: 'WOOFIE', price: '$', rating: 5, image: require('./assets/woofie.jpeg') },
    { id: 2, name: 'NearesTTen', price: '$', rating: 4, image: require('./assets/nearesTTen.jpeg') },
    { id: 3, name: "The Cartel's", price: '$', rating: 5, image: require('./assets/cartels.jpeg') },
    { id: 4, name: 'Tasstore', price: '$$', rating: 5, image: require('./assets/tasstore.jpeg') },
    { id: 5, name: 'Glassons', price: '$$', rating: 3, image: require('./assets/glassons.jpeg') },
];

const Alternatives = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Alternatives</Text>
            <Text style={styles.sortOption}>Sort by: ↑Ascending price</Text>
            <ScrollView style={styles.scrollView}>
                {stores.map((store) => (
                    <View key={store.id} style={styles.storeItem}>
                        <Image source={store.image} style={styles.storeImage} />
                        <View style={styles.storeInfo}>
                            <Text style={styles.storeName}>{store.name}</Text>
                            <Text style={styles.storePrice}>{store.price}</Text>
                            <View style={styles.storeRating}>
                                {[...Array(store.rating)].map((_, index) => (
                                    <Image key={index} source={require('./assets/leaf.png')} style={styles.ratingImage} />
                                ))}
                                {[...Array(5 - store.rating)].map((_, index) => (
                                    <Image key={index} source={require('./assets/grey-leaf.png')} style={styles.ratingImage} />
                                ))}
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#d2a679',
        padding: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    sortOption: {
        textAlign: 'center',
        margin: 10,
        fontSize: 14,
    },
    scrollView: {
        marginHorizontal: 10,
    },
    storeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 8,
    },
    storeImage: {
        borderRadius: 30,
        width: 60,
        height: 60,
        marginRight: 15,
    },
    storeInfo: {
        flexDirection: 'column',
    },
    storeName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    storePrice: {
        color: 'green',
        fontSize: 16,
    },
    storeRating: {
        flexDirection: 'row',
        marginTop: 5,
    },
    ratingImage: {
        width: 16,
        height: 16,
        marginRight: 2,
    },
});

export default Alternatives;

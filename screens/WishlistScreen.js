import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const stores = [
    {
        id: '1',
        name: 'Uniqlo',
        imageUrl: 'https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/467544/item/sggoods_02_467544.jpg?width=750',
        itemName: "Men's DRY-EX Short Sleeve T-Shirt (Light)",
        price: 'S$ 14.90',
    },
    {
        id: '2',
        name: 'Step of Grace',
        imageUrl: 'https://stepofgrace.com/cdn/shop/products/IDRAMAXI_720x.jpg?v=1645760690',
        itemName: 'IDRA NATURAL BLEND MAXI DRESS',
        price: 'S$ 100.00',
    },
    {
        id: '3',
        name: 'Step of Grace',
        imageUrl: 'https://stepofgrace.com/cdn/shop/products/Step-of-Grace-Evry-Shirt-Blend_720x.jpg?v=1590211662',
        itemName: 'ÉVRY NATURAL BLEND SHIRT',
        price: 'S$ 57.00',
    },
];

export default function WishlistScreen() {
    // Group items by store name
    const groupedStores = stores.reduce((acc, item) => {
        if (!acc[item.name]) {
            acc[item.name] = [];
        }
        acc[item.name].push(item);
        return acc;
    }, {});

    // Convert grouped stores to array
    const groupedStoresArray = Object.keys(groupedStores).map(name => ({
        name,
        items: groupedStores[name],
    }));

    return (
        <View style={styles.container}>
            <FlatList
                data={groupedStoresArray}
                keyExtractor={(item, index) => `${item.name}_${index}`}
                renderItem={({ item }) => (
                    <View style={styles.storeContainer}>
                        <Text style={styles.storeText}>{item.name}</Text>
                        <View style={styles.itemContainer}>
                            {item.items.map(storeItem => (
                                <View key={storeItem.id} style={styles.item}>
                                    <Image source={{ uri: storeItem.imageUrl }} style={styles.storeImage} />
                                    <View style={styles.itemDetails}>
                                        <Text style={styles.itemName}>{storeItem.itemName}</Text>
                                        <Text style={styles.price}>{storeItem.price}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    storeContainer: {
        marginBottom: 20,
    },
    storeText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 16,
        textAlign: 'left',
        width: screenWidth / 2,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    item: {
        width: '48%', // 48% width for two items side by side
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    storeImage: {
        width: '100%', // Full width of the item container
        aspectRatio: 3 / 4, // 3:4 aspect ratio
    },
    itemDetails: {
        padding: 8,
    },
    itemName: {
        fontSize: 16,
        flexWrap: 'wrap',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
    },
});

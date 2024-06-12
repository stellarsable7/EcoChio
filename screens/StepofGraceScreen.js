import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import { ProgressBar } from 'react-native-paper';



export default function StepofGraceScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} />
            <Text style={styles.title}>Step of Grace</Text>
            <Rating imageSize={20} readonly startingValue={4} style={styles.rating} />
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Sustainability: 4/5</Text>
                <TouchableOpacity>
                    <Icon name="info" size={16} style={styles.infoIcon} />
                </TouchableOpacity>
            </View>
            <ProgressBar progress={0.8} color="#869E61" style={styles.progressBar} />
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Price Range: 3/5</Text>
            </View>
            <ProgressBar progress={0.6} color="#869E61" style={styles.progressBar} />
            <Text style={styles.description}>
                We ranked Step of Grace 4 leaves because they choose natural fabrics (like linen, GOTS Certified Cotton, Bamboo Fibres) or semi-natural fabric (like responsibly harvested rayon and tencel) that have low eco-impact. At the same time, they also take into consideration the shelf-life period of their clothing.
                {'\n\n'}
                They also plant trees to off-set the carbon that they produce.
                {'\n\n'}
                To find out more, head to their website: <Text style={styles.link} onPress={() => Linking.openURL('https://stepofgrace.com/pages/sustainability-at-step-of-grace')}>https://stepofgrace.com</Text>
            </Text>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFCEB',
    },
    backButton: {
        alignSelf: 'flex-start',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
    },
    rating: {
        alignSelf: 'center',
        marginVertical: 8,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    infoText: {
        fontSize: 16,
    },
    infoIcon: {
        marginLeft: 8,
    },
    progressBar: {
        height: 10,
        borderRadius: 5,
        marginVertical: 8,
    },
    description: {
        fontSize: 14,
        marginVertical: 8,
    },
    link: {
        color: '#869E61',
        textDecorationLine: 'underline',
    },
});
import * as React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking,
    ScrollView,
} from "react-native";
import { Icon, Rating } from "react-native-elements";
import { ProgressBar } from "react-native-paper";

export default function UniqloScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} />
            <Text style={styles.title}>Uniqlo</Text>
            <Rating imageSize={20} readonly startingValue={4} style={styles.rating} />
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Sustainability: 3/5</Text>
                <Icon name="info" size={16} style={styles.infoIcon} />
            </View>
            <ProgressBar progress={0.8} color="#869E61" style={styles.progressBar} />
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Price Range: 2/5</Text>
            </View>
            <ProgressBar progress={0.6} color="#869E61" style={styles.progressBar} />
            <Text style={styles.description}>
                Uniqlo provides free low priced alteration services for their customers,
                this encourages their customers to alter their clothes rather than
                buying another or throwing it away.
                {"\n\n"}
                Uniqlo also has several programs that helps both the enviornment and
                underpriveleged people. Thus, we decided on 3.
                {"\n\n"}
                To find out more, head to their website:{" "}
                <Text
                    style={styles.link}
                    onPress={() =>
                        Linking.openURL(
                            "https://www.uniqlo.com/jp/en/contents/sustainability/"
                        )
                    }
                >
                    https://www.uniqlo.com/jp/ja/
                </Text>
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#FFFCEB",
    },
    backButton: {
        alignSelf: "flex-start",
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8,
    },
    rating: {
        alignSelf: "center",
        marginVertical: 8,
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
        color: "#869E61",
        textDecorationLine: "underline",
    },
});

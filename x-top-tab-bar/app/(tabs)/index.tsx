import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const page = () => {
    return (
        <View style={styles.container}>
            <Text>page index</Text>

            <Link href={"/details"}>Details</Link>

            <Link
                href={{
                    pathname: "/(tabs)/following",
                    params: { refresh: "1" },
                }}
            >
                Go to following
            </Link>
        </View>
    );
};

export default page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
});

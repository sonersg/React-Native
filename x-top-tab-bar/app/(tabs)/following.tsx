import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const page = () => {
    const { refresh } = useLocalSearchParams<{ refresh: string }>();

    if (refresh && refresh === "1") Alert.alert("Refreshed!");

    return (
        <View>
            <Text>page following</Text>
        </View>
    );
};

export default page;

const styles = StyleSheet.create({});

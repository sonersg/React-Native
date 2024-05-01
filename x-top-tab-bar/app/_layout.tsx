import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, TouchableHighlight, TouchableOpacity } from "react-native";

const _layout = () => {
    return (
        <Stack screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerLeft: () => (
                        <Image
                            source={{
                                uri: "https://avatars.githubusercontent.com/u/80483910?v=4",
                            }}
                            style={{ width: 30, height: 30, borderRadius: 30 }}
                        />
                    ),
                    headerRight: () => (
                        <TouchableOpacity>
                            <Ionicons
                                size={24}
                                color="black"
                                name="settings-outline"
                            />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: "center",
                    headerTitle: () => (
                        <Image
                            source={{
                                uri: "https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png",
                            }}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: "contain",
                            }}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="details"
                options={{
                    headerTitle: "Details",
                    headerBackTitle: "back",
                    headerTitleAlign: "center",
                }}
            />
        </Stack>
    );
};

export default _layout;

import React from "react";
import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);

const _layout = () => {
    return (
        <MaterialTopTabs
            screenOptions={{
                tabBarActiveTintColor: "#131620",
                tabBarLabelStyle: {
                    fontSize: 14,
                    textTransform: "capitalize",
                    fontWeight: "bold",
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#1C87ED",
                    height: 5,
                },
            }}
        >
            <MaterialTopTabs.Screen
                name="index"
                options={{ title: "for you" }}
            />
            <MaterialTopTabs.Screen
                name="following"
                options={{ title: "following" }}
            />
            <MaterialTopTabs.Screen
                name="reactnative"
                options={{ title: "react native" }}
            />
        </MaterialTopTabs>
    );
};

export default _layout;

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

function HomeScreen() {
  const [active, setactive] = useState("Steak");

  const commonCategories = [
    {
      name: "Pizza",
      imageSrc: require("../assets/images/pizza.png"),
    },
    {
      name: "Burger",
      imageSrc: require("../assets/images/burger.png"),
    },
    {
      name: "Cake",
      imageSrc: require("../assets/images/cake.png"),
    },
    {
      name: "Steak",
      imageSrc: require("../assets/images/steak.png"),
    },
    {
      name: "Pasta",
      imageSrc: require("../assets/images/pasta.png"),
    },
    {
      name: "Atom",
      imageSrc: require("../assets/images/smoothies.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Search setactive={setactive} />
      <Categories
        commonCategories={commonCategories}
        active={active}
        setactive={setactive}
      />
      <Restaurants active={active} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BusinessSearch",
      headerStyle: {
        backgroundColor: "skyblue",
      },
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigator);

// import { StatusBar } from "expo-status-bar";
// import { FlatList, StyleSheet, View } from "react-native";
// // components
// import Header from "./src/components/Header";
// import Search from "./src/components/Search";
// import { useState } from "react";
// import Categories from "./src/components/Categories";
// import Restaurants from "./src/components/Restaurants";

// export default function App() {
//   const [active, setactive] = useState("Steak");

//   const commonCategories = [
//     {
//       name: "Pizza",
//       imageSrc: require("./src/assets/images/pizza.png"),
//     },
//     {
//       name: "Burger",
//       imageSrc: require("./src/assets/images/burger.png"),
//     },
//     {
//       name: "Cake",
//       imageSrc: require("./src/assets/images/cake.png"),
//     },
//     {
//       name: "Steak",
//       imageSrc: require("./src/assets/images/steak.png"),
//     },
//     {
//       name: "Pasta",
//       imageSrc: require("./src/assets/images/pasta.png"),
//     },
//     {
//       name: "Atom",
//       imageSrc: require("./src/assets/images/smoothies.png"),
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Header />
//       <Search setactive={setactive} />
//       <Categories
//         commonCategories={commonCategories}
//         active={active}
//         setactive={setactive}
//       />
//       <Restaurants active={active} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

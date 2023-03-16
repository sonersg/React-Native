import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";
// react-native start --reset-cache

function Restaurants(props) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurants();

  useEffect(() => {
    searchRestaurant(props.active);
  }, [props.active]);

  if (loading) return <ActivityIndicator size="large" marginVertical={50} />;

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
}

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flex: 1,
  },

  header: {
    fontWeight: "bold",
    fontSize: 25,
    height: 40,
  },
});

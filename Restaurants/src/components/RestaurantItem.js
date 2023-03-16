import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import { elevation } from "../common/styles";

function RestaurantItem({ restaurant, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        return navigation.navigate("Restaurant", { id: restaurant.id });
      }}
    >
      <View style={[styles.container, elevation]}>
        <Image
          style={styles.image}
          source={{
            uri: restaurant.image_url || undefined,
          }}
        />
        <View>
          <Text>{restaurant.name}</Text>
          <View>
            <Text>{restaurant.rating}</Text>
            <Text>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  elevation,

  container: {
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: "row",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default withNavigation(RestaurantItem);

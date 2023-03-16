import { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import useRestaurant from "../hooks/useRestaurant";

function RestaurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  const id = navigation.getParam("id");

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = dimensions.height / 3;

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  if (loading) return <ActivityIndicator size="large" marginTop={100} />;
  if (error) return <Text>{error}</Text>;

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{
                width: imageWidth,
                height: imageHeight,
                marginBottom: 20,
              }}
            />
          )}
        />
      )}
    </View>
  );
}

export default RestaurantScreen;

import { StatusBar } from "expo-status-bar";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import Calendar from "./src/components/Calendar";
import PrayerTimes from "./src/components/PrayerTimes";
import SearchCity from "./src/components/SearchCity";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/15545431/pexels-photo-15545431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Calendar />
        <SearchCity />
      </ImageBackground>
    </View>
  );
}

const dimensions = Dimensions.get("window");
const w = dimensions.width;
const h = dimensions.height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
  },

  backgroundImage: {
    width: w,
    height: h,
  },
});

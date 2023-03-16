import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import elevation from "../common/styles";

export default function CategoryItem(props) {
  return (
    <TouchableOpacity onPress={props.handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          props.index === 0 ? { marginLeft: 30 } : { marginLeft: 0 },
          props.active
            ? { backgroundColor: "rgb(241, 186, 87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.ItemImgContainer}>
          <Image source={props.imageSrc} style={styles.ItemImg} />
        </View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 10,
    width: 60,
    height: 70,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },

  elevation,

  ItemImg: {
    width: 35,
    height: 35,
  },
  ItemImgContainer: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

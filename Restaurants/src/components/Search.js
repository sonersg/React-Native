import { StyleSheet, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
// import { elevation } from "./src/common/styles";

export default function Search(props) {
  const [input, setinput] = useState("");

  function handleEndEditing() {
    if (!input) return;
    props.setactive(input.trim());
    setinput("");
  }
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        placeholder="Restaurants, food"
        onChangeText={text => setinput(text)}
        onEndEditing={handleEndEditing}
        value={input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginVertical: 10,
    width: "82%",
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    backgroundColor: "white",
    overflow: "hidden",
  },

  textInput: {
    fontSize: 17,
    width: "80%",
  },

  searchIcon: {
    margin: 10,
  },
});

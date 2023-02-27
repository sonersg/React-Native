import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

export default function App() {
  const [input, setinput] = React.useState("");
  const [items, setitems] = React.useState([]);

  function handleTextInput(text) {
    setinput(text);
  }
  function handleButtonPress() {
    setitems(prev => [...prev, input]);
    ToastAndroid.showWithGravity(
      "Item Added!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    setinput("");
  }
  function handlePress(pressedItem) {
    setitems(prev => prev.filter(i => i !== pressedItem));
    ToastAndroid.showWithGravity(
      "Item Deleted!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.text}>..Soner Güçlü..</Text>
        {items.map((item, index) => (
          <Pressable
            key={index}
            onPress={handlePress.bind(this, item)}
            android_ripple={{ color: "white" }}
            style={({ pressed }) => pressed && styles.pressedItem}
          >
            <Text style={styles.eachItem}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyles}
          placeholder="New Item..."
          onChangeText={handleTextInput}
          value={input}
        />
        <Button title="Add Item" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hotpink",
    alignItems: "center",
    paddingTop: 30,
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 20,
  },
  inputStyles: {
    borderColor: "white",
    borderWidth: 2,
    color: "white",
    paddingHorizontal: 20,
    flex: 1,
  },
  eachItem: {
    marginVertical: 10,
    padding: 10,
    color: "white",
    backgroundColor: "gray",
  },
  scrollContainer: {
    // backgroundColor: "green",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

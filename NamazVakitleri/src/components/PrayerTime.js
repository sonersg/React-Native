import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PrayerTime(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.vakit}</Text>
    </TouchableOpacity>
  );
}

export default PrayerTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#33333355",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "#555",
    borderRadius: 10,
    width: 200,
  },

  text: {
    color: "antiquewhite",
    fontSize: 25,
  },
});

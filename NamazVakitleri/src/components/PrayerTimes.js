import React from "react";
import { StyleSheet, View } from "react-native";
import PrayerTime from "./PrayerTime";

function PrayerTimes() {
  return (
    <View style={styles.container}>
      <PrayerTime />
      <PrayerTime />
      <PrayerTime />
      <PrayerTime />
      <PrayerTime />
      <PrayerTime />
    </View>
  );
}

export default PrayerTimes;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    alignItems: "center",
    marginTop: 30,
  },
});

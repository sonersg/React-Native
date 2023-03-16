import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import prayerTimesApi from "../api/prayerTimesApi";
import PrayerTime from "./PrayerTime";

function SearchCity() {
  const [text, settext] = useState("");
  const [today, settoday] = useState({});
  const [city, setcity] = useState("");

  const handleEndEditing = async () => {
    let city = text;
    try {
      const response = await prayerTimesApi.get(`/${city}`);
      settoday(response.data.today);
      setcity(response.data.city);

      // fetch(`https://dailyprayer.abdulrcs.repl.co/api/${city}`)
      //   .then(resp => resp.json())
      //   .then(d => settoday(d.today));
    } catch (error) {
      console.log("catch");
      console.log(error);
    }
    settext("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search city..."
        style={styles.input}
        onChangeText={t => settext(t)}
        onEndEditing={handleEndEditing}
        value={text}
      />
      {today && (
        <View>
          <PrayerTime name="Fajr" vakit={today.Fajr} />
          <PrayerTime name="Sunrise" vakit={today.Sunrise} />
          <PrayerTime name="Dhuhr" vakit={today.Dhuhr} />
          <PrayerTime name="Asr" vakit={today.Asr} />
          <PrayerTime name="Maghrib" vakit={today.Maghrib} />
          <PrayerTime name="Isha'a" vakit={today["Isha'a"]} />
        </View>
      )}
      <View>
        <Text style={styles.city}>{city}</Text>
      </View>
    </View>
  );
}

export default SearchCity;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "#33333377",
    borderBottomWidth: 3,
    borderColor: "antiquewhite",
    borderRadius: 10,
    width: 250,
    paddingVertical: 5,
    marginVertical: 30,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },

  city: {
    marginVertical: 30,
    color: "antiquewhite",
    fontSize: 25,
  },
});

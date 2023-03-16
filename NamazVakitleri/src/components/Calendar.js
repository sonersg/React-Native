import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Calendar() {
  const [hour, sethour] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [year, setyear] = useState(2322);
  const [day, setday] = useState(""); // 0-6
  const [date, setdate] = useState(1); // 1-31
  const [month, setmonth] = useState("Nisan"); // 0-11

  setInterval(() => {
    getDate();
  }, 1000);

  function getDate() {
    const date = new Date();
    sethour(date.getHours());
    setminutes(date.getMinutes());
    const days = ["Pzr", "Pzt", "Salı", "Çrş", "Prşm", "Cuma", "Cmt"];
    setday(days[date.getDay()]);
    setyear(date.getFullYear());
    setdate(date.getDate());
    const months = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Hzrn",
      "Temmz",
      "Ağust",
      "Eylül",
      "Ekim",
      "Kasım",
      "Arlk",
    ];
    setmonth(months[date.getMonth()]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.one}>
        <Text style={[styles.text, { fontSize: 30 }]}>
          {hour}:{minutes}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.one}>
        <Text style={styles.text}>
          {date} {month}
        </Text>
        <Text style={styles.text}>16 Şaban</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.one}>
        <Text style={[styles.text, { fontSize: 20 }]}>{day}</Text>
        <Text style={[styles.text, { fontSize: 20 }]}>{year}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
    // backgroundColor: "red",
  },

  one: {
    backgroundColor: "#33333377",
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 3,
    width: 100,
  },

  text: {
    color: "antiquewhite",
    fontWeight: "bold",
    fontSize: 15,
  },
});

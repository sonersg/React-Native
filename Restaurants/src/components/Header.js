import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Header() {
  const [active, setactive] = useState(false);
  function handlePress() {
    setactive(true);
    setTimeout(() => {
      setactive(false);
    }, 600);
  }

  return (
    <View style={styles.container}>
      <View style={styles.soner}>
        <Text style={styles.t1}>Grab your</Text>
        <Text
          style={[
            styles.t1,
            active ? { color: "black" } : { color: "transparent" },
          ]}
        >
          Soner
        </Text>
      </View>
      <TouchableOpacity onLongPress={handlePress}>
        <Text style={styles.t2}>delicious meal!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginLeft: 30,
  },
  t1: {
    fontSize: 30,
    marginRight: 50,
  },
  t2: {
    fontSize: 35,
    fontWeight: "bold",
  },

  soner: {
    flexDirection: "row",
  },
});

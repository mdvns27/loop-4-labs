import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { GlassView } from "expo-glass-effect";
import FAB from "../components/FAB";

export default function Index() {
  const displayAlert = () => {};

  return (
    <View style={styles.container}>
      <FAB onPress={displayAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  link: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
  },
});

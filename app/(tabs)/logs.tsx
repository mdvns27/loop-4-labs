import { View, Text, StyleSheet } from "react-native";
import { GlassView } from "expo-glass-effect";
export default function ShowLogs() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is where the logging happens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

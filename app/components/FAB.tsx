import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { GlassView } from "expo-glass-effect";
interface FABProps {
  onPress?: () => void;
}

export default function FAB(props: FABProps) {
  return (
    <GlassView style={styles.button} isInteractive={true}>
      <Pressable onPress={props.onPress}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </GlassView>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 100,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    lineHeight: 30,
  },
});

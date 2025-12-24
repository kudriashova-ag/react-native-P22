import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Slot />
      <View style={styles.footer}>
        <Text>Root Layout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: "#ddd",
    alignItems: "center",
  },
});

export default RootLayout;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
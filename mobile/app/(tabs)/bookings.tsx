import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../../src/components/ui/Screen";
import { colors } from "../../src/theme/colors";

export default function BookingsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Le tue prenotazioni</Text>
        <Text style={styles.subtitle}>
          Qui mostreremo le prenotazioni confermate.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
  },
});

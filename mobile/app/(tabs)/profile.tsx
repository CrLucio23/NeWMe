import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../../src/components/ui/Screen";
import { useAuth } from "../../src/features/auth/hooks/useAuth";
import { colors } from "../../src/theme/colors";

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Profilo</Text>
        <Text style={styles.subtitle}>Nome: {user?.name}</Text>
        <Text style={styles.subtitle}>Email: {user?.email}</Text>
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
    marginBottom: 16,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 8,
  },
});

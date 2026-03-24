import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});

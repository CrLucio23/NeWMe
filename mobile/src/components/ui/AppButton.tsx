import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export default function AppButton({ title, onPress, loading = false }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && { transform: [{ scale: 0.98 }] },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  text: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 16,
  },
});

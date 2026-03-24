import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { colors } from "../../../theme/colors";

type Day = {
  iso: string;
  label: string;
};

type Props = {
  days: Day[];
  selectedDay: string;
  onSelect: (day: string) => void;
};

export default function DaySelector({ days, selectedDay, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {days.map((day) => {
        const active = selectedDay === day.iso;

        return (
          <Pressable
            key={day.iso}
            onPress={() => onSelect(day.iso)}
            style={[styles.item, active && styles.itemActive]}
          >
            <Text style={[styles.text, active && styles.textActive]}>
              {day.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 10,
  },
  itemActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    color: colors.text,
    fontWeight: "600",
  },
  textActive: {
    color: colors.white,
  },
});

import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import AppButton from "../../src/components/ui/AppButton";
import Screen from "../../src/components/ui/Screen";
import { services, slotsByDay } from "../../src/constants/mock";
import DaySelector from "../../src/features/bookings/components/DaySelector";
import TimeSlotList from "../../src/features/bookings/components/TimeSlotList";
import { getNextDays } from "../../src/features/bookings/utils/dates";
import { colors } from "../../src/theme/colors";

export default function BookingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const service = services.find((item) => item.id === id);

  const days = useMemo(() => getNextDays(7), []);
  const [selectedDay, setSelectedDay] = useState(days[0]?.iso ?? "");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const slots = slotsByDay[selectedDay] ?? [];

  const handleConfirm = () => {
    const chosenSlot = slots.find((slot) => slot.id === selectedSlot);

    if (!service || !chosenSlot) {
      Alert.alert("Attenzione", "Seleziona prima giorno e orario.");
      return;
    }

    Alert.alert(
      "Prenotazione confermata",
      `${service.title} il ${selectedDay} alle ${chosenSlot.time}`,
    );

    router.back();
  };

  if (!service) {
    return (
      <Screen>
        <Text style={{ color: colors.text }}>Servizio non trovato.</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.category}>{service.category}</Text>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.meta}>
          {service.duration} min • €{service.price}
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Seleziona giorno</Text>
          <DaySelector
            days={days}
            selectedDay={selectedDay}
            onSelect={(day) => {
              setSelectedDay(day);
              setSelectedSlot(null);
            }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Orari disponibili</Text>
          <TimeSlotList
            slots={slots}
            selectedSlot={selectedSlot}
            onSelect={setSelectedSlot}
          />
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Riepilogo</Text>
          <Text style={styles.summaryText}>Servizio: {service.title}</Text>
          <Text style={styles.summaryText}>Data: {selectedDay}</Text>
          <Text style={styles.summaryText}>
            Slot: {slots.find((s) => s.id === selectedSlot)?.time ?? "-"}
          </Text>
        </View>

        <AppButton title="Conferma prenotazione" onPress={handleConfirm} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  category: {
    color: colors.primarySoft,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 15,
  },
  section: {
    marginTop: 28,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
  },
  summary: {
    marginTop: 28,
    marginBottom: 22,
    backgroundColor: colors.cardSoft,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  summaryTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 10,
  },
  summaryText: {
    color: colors.textSecondary,
    fontSize: 15,
    marginBottom: 6,
  },
});

import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Service } from '../../bookings/types/booking.types';
import { colors } from '../../../theme/colors';

type Props = {
  service: Service;
  onPress: () => void;
};

export default function ServiceCard({ service, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: service.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{service.category}</Text>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.meta}>
          {service.duration} min • €{service.price}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 16,
  },
  category: {
    color: colors.primarySoft,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 14,
  },
});
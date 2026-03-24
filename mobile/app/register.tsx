import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import AppButton from "../src/components/ui/AppButton";
import AppInput from "../src/components/ui/AppInput";
import Screen from "../src/components/ui/Screen";
import { useAuth } from "../src/features/auth/hooks/useAuth";
import { colors } from "../src/theme/colors";

export default function RegisterScreen() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    register(name, email, password);
    router.replace("/(tabs)/home");
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.hero}>
          <Text style={styles.title}>Crea account</Text>
          <Text style={styles.subtitle}>
            Un profilo veloce per iniziare a prenotare subito.
          </Text>
        </View>

        <AppInput
          label="Nome"
          placeholder="Mario Rossi"
          value={name}
          onChangeText={setName}
        />

        <AppInput
          label="Email"
          placeholder="nome@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <AppInput
          label="Password"
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <AppButton title="Registrati" onPress={handleRegister} />

        <Text style={styles.footer}>
          Hai già un account?{" "}
          <Link href="/login" style={styles.link}>
            Accedi
          </Link>
        </Text>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  hero: {
    marginBottom: 32,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: colors.primarySoft,
    fontWeight: "700",
  },
});

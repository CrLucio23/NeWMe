import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "auth_token";

export const storage = {
  async setToken(token: string) {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  },

  async getToken() {
    return AsyncStorage.getItem(TOKEN_KEY);
  },

  async removeToken() {
    return AsyncStorage.removeItem(TOKEN_KEY);
  },
};

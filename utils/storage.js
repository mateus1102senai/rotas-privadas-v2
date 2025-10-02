// AsyncStorage helpers
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // Salvar dados
  setItem: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Erro ao salvar no storage:', error);
    }
  },

  // Recuperar dados
  getItem: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Erro ao recuperar do storage:', error);
      return null;
    }
  },

  // Remover dados
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Erro ao remover do storage:', error);
    }
  },

  // Limpar tudo
  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Erro ao limpar storage:', error);
    }
  }
};
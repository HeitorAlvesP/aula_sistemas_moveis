import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';

import ListaOrcamentos from './src/screens/ListaOrcamentos';
import FormularioOrcamento from './src/screens/FormularioOrcamento';
import { Orcamento } from './src/types';
import { colors } from './src/theme';

export type RootStackParamList = {
  Lista: undefined;
  Formulario: { orcamento?: Orcamento };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.purple.base} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Lista" component={ListaOrcamentos} />
          <Stack.Screen name="Formulario" component={FormularioOrcamento} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}

import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: true
      }} />
    </Stack>
  );
}

function criaEstilo() {
  StyleSheet.create(
    {
      titulo: {
        fontSize: 50,
        backgroudColor: '#CCCCCC',
        borderRadius: 10,
        color: 'white'
      }
    }
  );
}
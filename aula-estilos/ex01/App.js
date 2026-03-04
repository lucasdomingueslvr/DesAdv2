import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c7c4c4'
    }}>
      <Text style={{
        fontSize: 24,
        color: '#333'
      }}>teste</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

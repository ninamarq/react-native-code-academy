import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorld}>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1637A2',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  helloWorld: {
    backgroundColor: '#89A1EF',
    padding: 12,
    borderRadius: 10,
    fontSize: 25,
    color: '#DBE2FA',
    shadowColor: "#EDF1FD",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
});

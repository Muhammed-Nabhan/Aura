import {  StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
    <Text>RootLayout</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent:'center',
    alignContent:'center'
  },
 
 
});

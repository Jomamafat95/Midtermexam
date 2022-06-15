import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.colmcontainer}>
      </View>
      <View style={styles.rwcontainer}>
        <View style={styles.rowFlexDesign}>
          <View style={styles.rowBox}>
            <Text style={styles.text}>IS657 Midterm</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({

  rowFlexDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBox: {
    borderWidth: 2,
    backgroundColor: 'green',
    borderColor: 'green',
    height: 150,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginRight: 15,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
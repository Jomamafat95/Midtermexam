import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [No, setNo] = useState(0);
  const [No2, setNo2] = useState(0);
  const [msg, setMsg] = useState('');
  const [ermsg, setermsgErrorMessage] = useState('');


  function getSum() {
    const total = No + No2;
    return `${total}`;
  }

  function Get1stNo(Inp) {
    const InpNo = parseInt(Inp) || 0;
    setNo(InpNo)
  }

  function Get2ndNo(Inp2) {
    const InpNo2 = parseInt(inp2) || 0;
    setNo2(inpNo2)
  }

  function RefreshCalc() {
    window.location.reload(false)
  }

  return (

    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>
        IS657 Midterm
      </Text>
      </View>

      <View style={styles.rowtext}>
        <Text style={styles.text}>
          No1 [10 to 20]:
        </Text>

        <View style={styles.formatInputBox}>
        <TextInput style={styles.inputBox}
        onChangeText={Get1stNo}
          value={No.toString()}
          keyboardType='numeric'>
        </TextInput>
        </View>
      </View>

      <View style={styles.rowtext}>
        <Text style={styles.text}>
          No2 [100 to 200]:
        </Text>

        <View style={styles.formatInputBox}>
        <TextInput style={styles.inputBox}
        onChangeText={Get2ndNo}
          value={No2.toString()}
          keyboardType='numeric'>
        </TextInput>
        </View>
      </View>
      
      <View style={styles.rowtext}>
        <Button
          title='CALCULATE SUM'
          onPress = {() => setMsg(getSum)}>
        </Button>
        
        <View style={styles.sumBox}>
        <Text style={styles.text}>
          {msg}
        </Text>
      </View>
      </View>


      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 'initial%',
    height: '100%',
    margin: 2,
    padding: 20

  },

  titleContainer: {
    width: '100%',
    height: 150,
    backgroundColor: 'teal',
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Helvetica',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20
    
    
  },

  title: {
    color: 'gold',
    alignItems: 'center',
    fontSize: 25,
    fontFamily: 'Helvetica',
    

  },

  text: {
    color: 'black',
    alignItems: 'center',
    fontSize: 15,    
    fontFamily: 'Helvetica',
    paddingVertical: 5,

  },

  inputBox: {
    
    width: 100,
    height: 50,
    color: 'black',
    alignItems: 'center',
    fontSize: 15,    
    fontFamily: 'TimesNewRoman',
    padding: 5,
    borderWidth: 2,
    marginBottom: 20
    
  },

  sumBox: {
    
    width: 100,
    height: 50,
    color: 'black',
    alignItems: '',
    fontSize: 15,    
    fontFamily: 'Helvetica',
    padding: 5,
    borderWidth: 2,
    
    
  
  },

  rowtext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'

  },



});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState("");
  const calcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);
    const imc = weight / (height * height);

    if (imc < 18.5)
      return Alert.alert(
        "Abaixo do peso!", `Seu IMC é de: ${imc.toFixed(2)}`
      );
    if (imc >= 18.5 && imc < 25)
      return Alert.alert(
        "Peso Normal!", `Seu IMC é de: ${imc.toFixed(2)}`
      );
    if (imc >= 25 && imc < 30)
      return Alert.alert(
        "Acima do peso!", `Seu IMC é de: ${imc.toFixed(2)}`
      );
    if (imc > 30)
      return Alert.alert(
        "Obesidade!", `Seu IMC é de: ${imc.toFixed(2)}`
      );
  }
  return (
    <View style={styles.container}>

      <Text style={styles.inputText}> Altura</Text>

      <TextInput
        keyboardType='number-pad'
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text)} />

      <Text style={styles.inputText}>Peso</Text>

      <TextInput
        keyboardType='number-pad'
        style={styles.input}
        value={peso}
        onChangeText={(text) => setPeso(text)} />
      <StatusBar />

      <TouchableOpacity onPress={calcular} style={styles.button}>
        <Text style={styles.buttonText}> Calcular</Text>
      </TouchableOpacity>

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
  input: {
    height: 50,
    width: "80%",
    backgroundColor: "#FBEAFF",
    elevation: 2,    
  },
  inputText: {
    fontFamily: "Arial",
    color: "#845EC2",
    fontSize: 25,
  },
  button: {
    backgroundColor: "#B39CD0",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 10,
    marginTop: 16,
  },
  buttonText: {
    fontFamily: "Arial",
    color: "#845EC2",
    fontSize: 25,
  },
});

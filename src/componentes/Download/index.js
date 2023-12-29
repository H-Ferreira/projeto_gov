import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './style'

function Download({ navigation }) {
  const handleButtonPress = () => {
    Alert.alert('Download iniciado', 'Por favor, verifique a pasta de downloads do seu dispositivo uma vez que o download esteja completo.');
    navigation.navigate('Home');
  };

  return ( 
    <ImageBackground style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/imagemgov.png')}
      />
      <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={handleButtonPress}> 
        <Text style={styles.buttonText}>BAIXAR FORMULÁRIO</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Download;
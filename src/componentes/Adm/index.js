import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Vibration } from 'react-native';
import styles from './style'

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // Quando a tela perde o foco (o usuário sai da tela), limpa os campos
      setEmail('');
      setPassword('');
    });

    return unsubscribe;
  }, [navigation]);

  const handleLogin = async () => {
    if (!email || !password) {
      Vibration.vibrate();
      Alert.alert('Erro', 'Por favor, preencha o email e a senha do administrador.');
      return;
    }

    if (email === 'administrador_gov@gmail.com' && password === 'Brasil2023!!!') {
      console.log('Login successful');
      navigation.navigate('Form');
    } else {
      Vibration.vibrate();
      Alert.alert(
        'Verificação Necessária',
        'Por favor, verifique o código de Adm/index.js para saber e-mail e senha do Administrador.'
      );
      console.log('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/imagemgov.png')}
      />
      <Text style={styles.actionText}>REALIZAR LOGIN COMO ADMINISTRADOR</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#808080"
        value={email}
        onChangeText={setEmail}
        color="#000000"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#808080"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        color="#000000"
      />
      <View style={{ height: 20 }} />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

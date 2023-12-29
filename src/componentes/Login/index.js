import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Vibration } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
      return;
    }

    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (!storedUserData) {
        Alert.alert('Erro', 'Nenhum usuário registrado encontrado.');
        return;
      }

      const userData = JSON.parse(storedUserData);
      if (userData.email === email && userData.password === password) {
        console.log('Login successful');
        navigation.navigate('Form');
      } else {
        Alert.alert(
          'Verificação Necessária',
          'Por favor, verifique se as informações estão corretas e tente novamente.'
        );
        console.log('Login failed');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro de Armazenamento', 'Ocorreu um erro ao acessar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/imagemgov.png')}
      />
      <Text style={styles.actionText}>REALIZAR O LOGIN</Text>
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
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button2}
        onPress={() => navigation.navigate('Adm')}
      >
        <Text style={styles.buttonText}>Sou Administrador</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
import React, { useState } from 'react';
import {View,  Text,  StyleSheet,  TextInput,  SafeAreaView,  KeyboardAvoidingView,  Platform,  TouchableWithoutFeedback,  Keyboard,  TouchableOpacity,  Alert,} from 'react-native';

const Header = () => 
(
  <View style={styles.header}>
    <Text style={styles.headerText}>Đăng nhập</Text>
  </View>
);

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    if (phoneNumber.trim() === '' || phoneNumber.length < 10) {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại hợp lệ.');
      return;
    }
    console.log('Phone Number:', phoneNumber);
    Alert.alert('Thông báo', `Đăng nhập với số điện thoại: ${phoneNumber}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.innerContainer}>
          <Header />
          <Text style={styles.label}>Nhập số điện thoại</Text>
          <Text style={styles.description}>
            Sử dụng số điện thoại để đăng nhập hoặc tạo tài khoản mới.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại (ít nhất 10 chữ số)"
            keyboardType="phone-pad"
            returnKeyType="done"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            onFocus={() => console.log('TextInput Focused')}
            maxLength={15}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#212529',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#495057',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#495057',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;

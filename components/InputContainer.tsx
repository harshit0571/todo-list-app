import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface props {
  inputText: string;
  setInputText: any;
}
const InputContainer = ({inputText, setInputText}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add a task"
          keyboardType="default"
          style={styles.textInput}
          value={inputText}
          onChangeText={newText => setInputText(newText)}
        />
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  textInput: {
    width: '80%',
    fontSize: 19,
    borderBottomWidth: 2,
    borderBottomColor: '#74B9FF',
  },
  inputButton: {
    backgroundColor: '#EA7773',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

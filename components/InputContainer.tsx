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
  storeData: any;
  setTodoArray: any;
  todoArray: any;
}
const InputContainer = ({
  inputText,
  setInputText,
  storeData,
  setTodoArray,
  todoArray,
}: props) => {
  const addTask = () => {
    const newTodo = {
      task: inputText,
      id: todoArray.length + 1,
      completed: false,
    };
    setTodoArray([...todoArray, newTodo]);
    storeData(todoArray);
    setInputText('')
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="add a task"
        keyboardType="default"
        style={styles.textInput}
        value={inputText}
        onChangeText={newText => setInputText(newText)}
      />
      <TouchableOpacity
        style={styles.inputButton}
        onPress={() => {
          addTask();
        }}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
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

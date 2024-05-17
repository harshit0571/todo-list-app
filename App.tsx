import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('todos', jsonValue);
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todos');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {}
  };

  const deleteTask = async (index: number) => {
    try {
      console.log(index);
      todoArray.splice(index, 1);
      await storeData(todoArray);
      setTodos();
    } catch (error) {}
  };
  const setTodos = async () => {
    const todos = await getData();
    setTodoArray(todos);
  };
  useEffect(() => {
    setTodos();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <SafeAreaView style={styles.main}>
        <View>
          <Text style={styles.headingText}>Todo List</Text>
        </View>
        <View style={styles.container}>
          <InputContainer
            inputText={inputText}
            setInputText={setInputText}
            storeData={storeData}
            setTodoArray={setTodoArray}
            todoArray={todoArray}
          />
          <TodoContainer todoArray={todoArray} deleteTask={deleteTask} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#74B9FF',
    padding: 10,
  },
  main: {
    backgroundColor: '#EAF0F1',
    flexGrow: 1,
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
  },
});

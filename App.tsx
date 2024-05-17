import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';

const App = () => {
  const [inputText, setInputText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <SafeAreaView style={styles.main}>
        <View>
          <Text style={styles.headingText}>Todo List</Text>
        </View>
        <View style={styles.container}>
          <InputContainer inputText={inputText} setInputText={setInputText} />
          <TodoContainer />
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
    gap:20
  },
});

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
 
  View,
} from 'react-native';
import React, {useState} from 'react';
import InputContainer from './components/InputContainer';

const App = () => {
  const [inputText, setInputText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <SafeAreaView style={styles.main}>
        <View>
          <Text style={styles.headingText}>Todo List</Text>
        </View>

        <InputContainer  inputText={inputText} setInputText={setInputText}/>
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
  
});

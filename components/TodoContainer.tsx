import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TodoContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Tasks List:</Text>
      <View style={styles.todoContainer}>
        <View style={styles.todos}>
          <Text>1.</Text>
          <Text>Go to Gym</Text>
          <Text>delete</Text>
        </View>
        <View style={styles.todos}>
          <Text>1.</Text>
          <Text>Go to Gym</Text>
          <Text>delete</Text>
        </View>
        <View style={styles.todos}>
          <Text>1.</Text>
          <Text>Go to Gym</Text>
          <Text>delete</Text>
        </View>
      </View>
    </View>
  );
};

export default TodoContainer;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    padding: 10,
  },
  headingText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left',
    padding: 10,
  },
  todoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    gap:10
  },
  todos: {
    display: 'flex',
    width: '90%',
    padding: 5,
    backgroundColor: '#EAF0F1',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap'
  },
});

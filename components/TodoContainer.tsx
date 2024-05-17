import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Tasks List:</Text>
      <View style={styles.todoContainer}>
        <View style={styles.todos}>
          <Text style={styles.number}>1.</Text>
          <Text style={styles.task}>Go to Gym</Text>
          <View style={styles.utilButtons}>
            <BouncyCheckbox fillColor="#45CE30" />
            <Text>❌</Text>
          </View>
        </View>
        <View style={styles.todos}>
          <Text style={styles.number}>1.</Text>
          <Text style={styles.task}>Go to Gym</Text>
          <View style={styles.utilButtons}>
            <BouncyCheckbox fillColor="#45CE30" />
            <Text>❌</Text>
          </View>
        </View>
        <View style={styles.todos}>
          <Text style={styles.number}>1.</Text>
          <Text style={styles.task}>Go to Gym</Text>
          <View style={styles.utilButtons}>
            <BouncyCheckbox fillColor="#45CE30" />
            <TouchableOpacity>
              <Text>❌</Text>
            </TouchableOpacity>
          </View>
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
    gap: 10,
  },
  todos: {
    display: 'flex',
    width: '90%',
    padding: 5,
    backgroundColor: '#EAF0F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  utilButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  task: {
    flex: 1,
    paddingHorizontal: 4,
    fontSize: 15,
    color: 'black',
  },
  number: {
    color: 'black',
  },
});

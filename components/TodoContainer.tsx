import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

interface props {
  todoArray: any;
  deleteTask: any;
  toggleMark: any;
}
const TodoContainer = ({todoArray, deleteTask, toggleMark}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Tasks List:</Text>
      <View style={styles.todoContainer}>
        {todoArray.length > 0 ? (
          todoArray.map((todo: any, index: any) => (
            <View style={styles.todos} key={index}>
              <Text style={[styles.number]}>{index + 1}.</Text>
              <Text style={[styles.task, todo.completed && styles.status]}>
                {todo.task}
              </Text>
              <View style={styles.utilButtons}>
                <BouncyCheckbox
                  fillColor="#45CE30"
                  isChecked={todo.completed}
                  onPress={() => {
                    toggleMark(index);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    deleteTask(index);
                  }}>
                  <Text>❌</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text>Error: No todos found</Text>
        )}
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
  status: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
});

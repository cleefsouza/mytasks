import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ITask, TasksContext} from '../../context/TasksContext';

export const TaskList = () => {
  const {tasks, removeTask} = React.useContext(TasksContext);

  const handleRemoveTask = (id: string) => {
    Alert.alert('Remover task', 'Deseja remover esta task?', [
      {
        text: 'Sim',
        onPress: () => removeTask(id),
      },
      {
        text: 'Não',
        onPress: () => {},
      },
    ]);
  };

  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 16,
  },
});

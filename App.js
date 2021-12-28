import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




const App = () => {

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [checkEdit, setCheckEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(0)

  //Adding Todo
  const addTodo = () => {
    let todoListCopy = [...todoList]
    if(checkEdit == true){
      todoListCopy.splice(editIndex,1,todo)
      setTodoList(todoListCopy)
      setCheckEdit(false)
      setTodo('')
    }else{
      setTodoList([...todoList, todo])
      setTodo('')
    }
  }

  //Deleting Todo
  const deleteTodo = (index) => {
    let todoListCopy = [...todoList]
    todoListCopy.splice(index,1)
    setTodoList(todoListCopy)
  }

  const editTodo = (index) => {
    let todoListCopy = [...todoList]
    setTodo(todoListCopy[index])
    setCheckEdit(true)
    setEditIndex(index)
  }

  return (
    <View style={styles.todo}>
      <View style={styles.header}>
        <Text style={{ color: "#000" }}>Todo List</Text>
      </View>
      <ScrollView>
        {todoList?.map((item, index) => (
          <View style={styles.todoList} key={index}>
            <View style={styles.todoItemContainer}>
              <Text style={styles.listItem}>{item}</Text>
            </View>
            <View style={styles.todoActions}>
              <TouchableOpacity onPress={()=>editTodo(index)} style={styles.btnEdit}>
                <Text>Edit</Text>
                {/* <Icon name="edit" size={30} color="#900" /> */}
                {/* <Icon name="rocket" size={30} color="#900" /> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>deleteTodo(index)} style={styles.btnDelete}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.todoInput}>
        <TextInput style={styles.input} value={todo} onChangeText={(e) => { setTodo(e) }} />
        <TouchableOpacity style={styles.addTodo} onPress={() => addTodo()}>
          <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    height: '100%',
    justifyContent: 'space-between'
  },

  todoItemContainer: {
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    padding: 20,
  },

  todoList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    padding: 20,
    borderColor: '#fff',
    borderWidth: 2,
    marginVertical: 5
  },

  listItem: {
    color: '#fff',
  },

  input: {
    backgroundColor: 'white',
    color: '#000',
    flex: 1
  },

  todoInput: {
    flexDirection: 'row'
  },

  todoActions: {
    flexDirection: 'row'
  },

  btnEdit: {
    paddingHorizontal: 15
  },

  addTodo: {
    padding: 20,
    backgroundColor: 'aqua',
  }
});

export default App;

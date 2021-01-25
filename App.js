/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { add_todo, remove_todo, clear_todo } from './src/actions';


class App extends Component {
  state = {
    todo: '',
    busy: false
  }

  addTodo = () => {
    this.props.add_todo(this.state.todo)
    this.setState({ todo: '' })
  }

  removeTodo = (id) => {
    this.props.remove_todo(id)
  }

  clear = async () => {
    this.setState({ busy: true })
    await this.props.clear_todo()
    this.setState({ busy: false })
  }

  render() {
    const busy =  this.state.busy
    return (
      <ScrollView>
       <View style={styles.container}>
         <Text>Todo List</Text>
         <View>
            <TextInput placeholder="escriba su tarea" style={styles.input} value={this.state.todo} onChangeText={todo => this.setState({ todo })} />
            <Button title="Agregar" onPress={this.addTodo} disabled={busy}/>
            <Button title="Limpiar" color="#BB1111" onPress={this.clear} disabled={busy}/>
         </View>
         {this.props.todos.map(value => (
           <TouchableOpacity key={value.id} onPress={() => this.removeTodo(value.id)} style={{ padding: 8 }}>
             <Text>{value.content}</Text>
           </TouchableOpacity>
         ))}
       </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  input: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth:  1,
    marginBottom: 8
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, { add_todo, remove_todo, clear_todo })(App);

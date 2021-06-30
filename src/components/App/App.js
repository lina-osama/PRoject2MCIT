import React, { Component } from "react";
import {List, Input, Checkbox, Button} from "../List/List";
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "appointment"},
      { id: 2, name: "homework" },
    ],
    todoContent: ""
  };

  onChangeInput = e => {
    this.setState({ todoContent: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoContent }) => ({
      todos: [...todos, { id: todos.length + 1, name: todoContent, done: false }],
      todoContent: ""
    }));
  };

  /*MARK AS COMPLETE*/
  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

/*DELETE ITEM FROM LIST*/
  handleDel = item => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id)
    }));
  };

  render() {
    const { todos, todoContent } = this.state;

    /*FIELD CONTENT START:*/

    return (
      <>
        <h2>ToDo List:</h2>
        <Input value={todoContent} onChange={this.onChangeInput} />
        <Button  onClick={this.onSubmitTodo}>Add</Button>
        <List
          list={todos}
          onChangeBox={this.onChangeBox}
          handleDel={this.handleDel}
        />
      </>
    );
  }
}

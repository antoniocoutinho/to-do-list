import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnList from './ColumnList'

class App extends Component {
  state = {
    tasks: []
  }
  componentWillMount(){
    const toDoListTasks = window.localStorage.getItem('toDoListTasks') || '[]'
    console.log('todolist: ', toDoListTasks)
    this.setState({tasks: JSON.parse(toDoListTasks)})
  }
  updateLocaStorage(tasks){
    const stringfiedTasks = JSON.stringify(tasks)
    window.localStorage.setItem('toDoListTasks', stringfiedTasks)
  }

  addTask(e){
    e.preventDefault()
    
    let {tasks} = this.state
    const value = e.target.querySelector('input').value
    const newTask = {
      id: tasks.length + 1,
      description: value,
      status: 'To do'
    }
    tasks = tasks.concat(newTask)
    this.updateLocaStorage(tasks)
    this.setState({tasks})
  }

  updateTask(target, task){
    let { tasks } = this.state
    tasks = tasks.filter(t => t.id !== task.id).concat({
      id: task.id,
      description:task.description,
      status: target.checked ? 'Done': 'To do'
    })
    this.updateLocaStorage(tasks)
    this.setState({tasks})
  }
  render() {
    const {tasks} = this.state

    const columns = [
      { title: 'To do', tasks },
      { title: 'Done', tasks }
    ]


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To do List</h1>
        </div>
        <div>
          <div className='App-container'>
            <div className='app-lists'>
              {columns.map(column => (
                <ColumnList
                  key={column.title}
                  columnTitle={column.title}
                  tasks={column.tasks}
                  addTask={(e)=> this.addTask(e)}
                  updateTask={(target, task)=> this.updateTask(target, task )}
                  />
              ))}


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

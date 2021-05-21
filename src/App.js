import React from 'react';
import './App.css'

//Components
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { Task } from './components/Task';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: "",
      tasks: []
    };
  }

  changeCurrentTask = (e) => {
    this.setState({currentTask: e.target.value})
  }

  addTask = (e) => {
    let currentTaskText = this.state.currentTask;
    if (currentTaskText) {
      let tasksText = this.state.tasks.map(task => task.props.taskText)
      
      if (tasksText.includes(currentTaskText)) {
        let counter = 1;
        while (true) {
          if (!tasksText.includes(currentTaskText + counter)) {
            currentTaskText += counter;
            break;
          }
          counter++;
        }
      }
      
    const tasks = [...this.state.tasks, <Task key={'task' + this.state.tasks.length + 1} onDelete={this.deleteTask} taskText={currentTaskText}/>] 
    this.setState({tasks: tasks})
    }
    console.log(this.state.tasks)
  }

  deleteTask = (e) => {
    let text;
    if (e.target.type === 'button')
      text = e.target.parentElement.parentElement.children[0].innerHTML;
    else
      text = e.target.parentElement.parentElement.parentElement.children[0].innerHTML;
    
    let newTasks = [];

    for (let task of this.state.tasks) {
      if (text !== task.props.taskText) { 
        newTasks.push(task);
      }
    }
    this.setState({tasks: newTasks});
  }

  completeTask = () => {
      this.setState({
        completed: true
      });
    }
  


  render() {
    return (
    <div>
      <header>
        <div className="background-header"><h1>TO-DO APP</h1></div>
      </header>
      <Form onChange={this.changeCurrentTask} onClick={this.addTask}/>
      <TaskList tasks={this.state.tasks} empty={this.state.tasks.length === 0}/>
    </div>
  );
  }
}

export default App;

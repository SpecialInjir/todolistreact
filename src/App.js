import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'


// const baseUrl = "https://reqres.in/api/users?page=1"
class App extends React.Component{  
  constructor(props){
    super(props)

    // axios.get(baseUrl).then(
    //   (res)=>{
    //     this.setState({users:res.data.data})
    //   }
    // )

    this.state = {
        tasks:  [
          
        ]
    
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
}
  render(){  return (<div className='Name'>
    <Header title="ToDo list" />
    <main>
        <Tasks tasks={this.state.tasks} onEdit={this.editTask} onDelete={this.deleteTask}/>
    </main>
    <aside>
      <AddTask onAdd={this.addTask} />
    </aside>
</div>)}

deleteTask(id){
  this.setState({
    tasks: this.state.tasks.filter((el)=> el.id !==id)
  })
}

editTask(task){
  let allTasks = this.state.tasks
  allTasks[task.id - 1] = task
   this.setState(
    {
    tasks: []
    },
    ()=> {
      this.setState({
        tasks: [...allTasks]
      })
    }
   )
}

addTask(task){
  const id = this.state.tasks.length + 1
  this.setState({tasks: [...this.state.tasks, {id, ...task}]})
}

}

export default App
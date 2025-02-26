import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Pagination from "./components/Pagination"
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      currentPage: 1, // Текущая страница
      todosPerPage: 5, // Количество задач на странице
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.paginate = this.paginate.bind(this); // Метод для изменения страницы
  }

  render() {
    const { tasks, currentPage, todosPerPage } = this.state;

    // Получение текущей страницы задач
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = tasks.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
      <div className="Name">
        <Header title="ToDo list" />
        <main>
          <Tasks
            tasks={currentTodos} // Передаем только текущую страницу задач
            onEdit={this.editTask}
            onDelete={this.deleteTask}
          />
        </main>
        <aside>
          <AddTask onAdd={this.addTask} />
        </aside>
        {/* Компонент пагинации */}
        <footer className="pagination-container footer-fixed">
        <Pagination 
          todosPerPage={todosPerPage}
          totalTodos={tasks.length}
          paginate={this.paginate}
          currentPage={currentPage}
        />
         </footer>
      </div>
    );
  }

  deleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== id),
    });
  }

  editTask(task) {
    let allTasks = this.state.tasks;
    allTasks[task.id - 1] = task;
    this.setState(
      {
        tasks: [],
      },
      () => {
        this.setState({
          tasks: [...allTasks],
        });
      }
    );
  }

  addTask(task) {
    const id = this.state.tasks.length + 1;
    this.setState({ tasks: [...this.state.tasks, { id, ...task }] });
  }

  // Изменение страницы
  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }
}

export default App;
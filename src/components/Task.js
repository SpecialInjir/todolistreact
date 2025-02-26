import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddTask from './AddTask';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false, // Состояние для отображения формы редактирования
        };
    }

    render() {
        const { task, onDelete } = this.props; // Деструктуризация props для удобства

        return (
            <div className="task">
                {/* Иконка удаления */}
                <IoCloseCircleSharp
                    onClick={() => onDelete(task.id)} // Вызываем функцию onDelete с ID пользователя
                    className="delete-icon"
                />

                {/* Иконка редактирования */}
                <IoHammerSharp
                    onClick={() =>
                        this.setState({
                            editForm: !this.state.editForm, // Переключаем состояние editForm
                        })
                    }
                    className="edit-icon"
                />

                {/* Информация о пользователе */}
                <h3>
                    {task.task_name} 
                </h3>
                <p>{task.task_description}</p>
                <p>{task.email}</p>
                <b>{task.isCritical ? 'Критично :(' : 'Не критично :)'}</b>

                {/* Условный рендеринг формы редактирования */}
                {this.state.editForm && <AddTask task={task} onAdd={this.props.onEdit} />}
            </div>
        );
    }
}

export default Task;
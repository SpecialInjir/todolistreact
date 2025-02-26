import React from 'react';
import Task from './Task';
class Tasks extends React.Component{

   
  
    render()
    {
        if(this.props.tasks.length>0)
            return(<div>
                {this.props.tasks.map((el)=> <Task onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} task={el} />)}
            </div>)
        else
        return(<div className="task"><h3>Нет задач</h3></div>)

    }

  
}

export default Tasks
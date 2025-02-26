import React from 'react';

class AddTask extends React.Component{
    taskAdd ={}
    constructor(props){
        super(props)
        this.state ={
            task_name: "",
            task_description: "",
            email: "",
            endDate:  new Date(),
            isCritical: false
        }
    }
    render()
    {
        return(
            <form ref={(el)=> this.myForm = el}> 
               <input placeholder="Название задачи"  onChange={(e)=>this.setState({task_name: e.target.value})}/>
               <input placeholder="Описание" onChange={(e)=>this.setState({task_description: e.target.value})}/>
               <textarea placeholder="Почта" onChange={(e)=>this.setState({email: e.target.value})}></textarea>
               <input placeholder="Дата окончания" onChange={(e)=>this.setState({endDate: e.target.value})}/>
               <label htmlFor="isCritical">Критичная ли задача?</label>
               <input  type="checkbox" id="isCritical" onChange={(e)=>this.setState({isCritical: e.target.checked})}/>
               <button
                    type="button"
                    onClick={() => {
                        this.myForm.reset()
                        this.taskAdd ={
                            task_name: this.state.task_name,
                            task_description: this.state.task_description,
                            email: this.state.email,
                            endDate: this.state.endDate,
                            isCritical: this.state.isCritical,
                        }
                        if(this.props.task){
                            this.taskAdd.id = this.props.task.id
                        }
                        this.props.onAdd( this.taskAdd )
                    }
                    }
                >
                    Добавить
                </button>
            </form>
        )
    }

  
}

export default AddTask
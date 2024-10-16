
import Tag from './Tag'
import TaskDropdown from './TaskDropdown'
import './TaskForm.css'


const tagValue = ['HTML', 'CSS','JavaScript','React']
const taskColumn = [
    {
        value:"todo",
        element:"To Do"
    }, 
    {
        value:"doing",
        element:"Doing"
    },
    {
        value:"done",
        element:"Done"
    }
]

const TaskForm = () => {
    
  return (
    <header className="app_header">
        <form>
            <input type="text" className="task_input" placeholder="Enter your task" />
            <div className="task_form_botton_line">
                <div>
                    {tagValue.map((value, index) => <Tag key={index} value={value} />)}
                </div>
                <div>
                    <select className="task_status">
                        {taskColumn.map((obj, index) =>  <TaskDropdown key={index} value={obj.value} element={obj.element} />)}
                    </select>
                    <button type="submit" className="task_submit">+ Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
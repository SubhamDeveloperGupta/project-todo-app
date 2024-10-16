
import './components/TaskForm'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'

const taskColumnName = ['Todo','Doing','Done']

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        {taskColumnName.map((obj,index) => <TaskColumn key={index} titleValue={obj}/>)}
      </main>
    </div>
  )
}

export default App
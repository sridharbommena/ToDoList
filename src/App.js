import './App.css';
import TodoApp from './TodoApp';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1 style={{
        textAlign : "center"
      }}>ToDo List</h1>
        <TodoApp />
    </div>
  );
}

export default App;

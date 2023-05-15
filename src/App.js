import './App.css';
import { TodosNavbar } from './components/todoNavbar/navbar';
import { TodosInput } from './components/todoInput/input';

function App() {
  return (
    <div class='container' >
      <TodosNavbar title='TO DO LIST'/>
      <TodosInput/>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if(input) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  return (
    <div className="todo-container">
      <h1>Meu Todo</h1>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Nova tarefa" />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;

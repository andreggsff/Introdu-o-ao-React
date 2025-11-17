# Minha Lista de Tarefas (Todo List)

Este projeto é uma simples aplicação de lista de tarefas (Todo List) criada com React e Vite. Ele demonstra conceitos fundamentais do React, como componentes, estado e manipulação de eventos.

## O que foi feito

O projeto consiste em um campo de entrada para adicionar novas tarefas, uma lista que exibe as tarefas adicionadas e um botão para remover cada tarefa individualmente. A interface foi estilizada para proporcionar uma experiência de usuário limpa e agradável.

## Conceitos Fundamentais do React Utilizados

### JSX: JavaScript e XML

JSX é uma extensão de sintaxe para JavaScript que se parece muito com HTML. Ele nos permite escrever estruturas semelhantes a HTML dentro do nosso código JavaScript, tornando a criação de interfaces de usuário mais intuitiva.

**Diferença para o HTML:**
- **`className` em vez de `class`**: Como `class` é uma palavra reservada em JavaScript, o JSX usa `className` para definir classes CSS.
- **Expressões JavaScript**: Você pode incorporar qualquer expressão JavaScript dentro do JSX, envolvendo-a com chaves `{}`.
- **Eventos**: Eventos são nomeados em `camelCase` (ex: `onClick` em vez de `onclick`).

### Componentes

Componentes são blocos de construção independentes e reutilizáveis que compõem a interface do usuário. Em React, um componente é tipicamente uma função JavaScript que retorna um elemento JSX. No nosso projeto, `App` é o componente principal que encapsula toda a lógica e a estrutura da aplicação.

### Hook `useState`

O `useState` é um *Hook* do React que permite adicionar estado a componentes de função. "Estado" é um objeto que armazena dados que podem mudar ao longo do tempo e que afetam o que é renderizado na tela.

- **Declaração**: `const [estado, setEstado] = useState(valorInicial);`
- **`estado`**: A variável que contém o valor atual do estado.
- **`setEstado`**: A função que usamos para atualizar o valor do estado. Chamar essa função faz com que o componente seja renderizado novamente com o novo valor.

No projeto, usamos o `useState` para gerenciar a lista de tarefas (`tarefas`) e o valor do campo de entrada (`input`).

### Manipulando Arrays e Propriedades

**Manipulação de Arrays no Estado:**
Para atualizar um array no estado do React, é importante nunca modificar o array original diretamente. Em vez disso, criamos uma nova cópia do array com as alterações desejadas.

- **Adicionar um item**: Usamos o operador *spread* (`...`) para criar um novo array com todos os itens antigos mais o novo item.
  ```javascript
  setTarefas([...tarefas, novaTarefa]);
  ```
- **Remover um item**: Usamos o método `filter()` para criar um novo array que contém apenas os itens que não correspondem ao critério de remoção.
  ```javascript
  setTarefas(tarefas.filter((tarefa, index) => index !== indexParaRemover));
  ```

**Propriedades (Props):**
As propriedades (props) são usadas para passar dados de um componente pai para um componente filho. Embora este projeto use um único componente, em aplicações maiores, você passaria dados como `tarefa` e funções como `removerTarefa` para um componente filho `TodoItem`, por exemplo.

## Como Executar o Projeto

1.  **Clone o repositório** (ou certifique-se de ter os arquivos do projeto).
2.  **Instale as dependências**:
    ```bash
    npm install
    ```
3.  **Execute o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
4.  Abra o navegador e acesse o endereço fornecido (geralmente `http://localhost:5173`).
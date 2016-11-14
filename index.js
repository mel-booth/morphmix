const h = require('hyperscript')
const morph = require('morphdom')

function Todos (listOfTodos){
  return h('ul', listOfTodos.map(todo => Todo(todo)))
}

function Todo (todoItem) {
  const { description, done } = todoItem
  const customClass = done ? 'done' : ''
  return h('li', {className: customClass}, description)
}

let state = {
  todos: [{
    description: 'buy stuff',
    done: false
  }, {
    description: 'eat stuff',
    done: true
  }, {
    description: 'blah',
    done: true
  }]
}

const todos = Todos(state.todos)

document.body.appendChild(todos)

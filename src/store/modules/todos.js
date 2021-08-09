import { getCurrentDateTime } from '../../helpers';

const todosModule = {
  state: {
    todos: []
  },
  getters: {
    todos: state => state.todos,
    isBulkActions: state => state.todos.some(todo => todo.completed),
    isCheckedAll: state => {
      const count = state.todos.filter(el => el.completed).length;
      return count === state.todos.length;
    },
    listIdChecked: state =>
      state.todos.filter(el => el.completed).map(el => el.id)
  },
  mutations: {
    changeAllStatus(state) {
      state.todos.map(el => {
        el.completed = true;
        return el;
      });
    },
    changeStatus(state, id) {
      state.todos.map(el => {
        if (el.id === id) el.completed = !el.completed;
        return el;
      });
    },
    setTodos(state, todos) {
      state.todos = todos
        .map(el => ({
          title: el.title,
          date: getCurrentDateTime(),
          id: el.id,
          piority: 1,
          description: '',
          completed: el.completed
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
      state.todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    updateTodo(state, newTodo) {
      const index = state.todos.findIndex(el => el.id === newTodo.id);
      state.todos[index] = newTodo;
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(el => el.id !== id);
    },
    deleteTodos(state, listId) {
      state.todos = state.todos.filter(el => !listId.includes(el.id));
    },
    searchTodos(state, text) {
      if (text.length === 0) state.todos;
      state.todos = state.todos.filter(el => {
        return text
          .toLowerCase()
          .split(' ')
          .every(v => el.title.toLowerCase().includes(v));
      });
    }
  },
  actions: {
    ADD_TODO({ commit }, todo) {
      commit('addTodo', todo);
    },
    UPDATE_TODO({ commit }, todo) {
      commit('updateTodo', todo);
    },
    DELETE_TODO({ commit }, id) {
      commit('deleteTodo', id);
    },
    DELETE_TODOS({ commit }, listId) {
      commit('deleteTodos', listId);
    },
    GET_TODOS({ commit }, todos) {
      commit('setTodos', todos);
    }
  }
};

export default todosModule;

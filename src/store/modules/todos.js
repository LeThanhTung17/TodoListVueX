import { getCurrentDateTime } from '../../helpers';

const todosModule = {
  state: {
    todos: [],
    todosSearch: [],
    isSearch: false
  },
  getters: {
    todos: state => state.todos,
    isBulkActions: state => state.todos.some(todo => todo.completed),
    isCheckedAll: state => {
      const count = state.todos.filter(el => el.completed).length;
      return count === state.todos.length;
    },
    listIdChecked: state =>
      state.todos.filter(el => el.completed).map(el => el.id),
    todosSearch: state => (state.isSearch ? state.todosSearch : state.todos)
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
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
      state.todos.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    updateTodo(state, newTodo) {
      let newList = [...state.todos];
      const index = newList.findIndex(el => el.id === newTodo.id);
      newList[index] = newTodo;
      newList[index].completed = state.todos[index].completed;
      state.todos = newList;
    },
    updateStatus(state, payload) {
      let newList = [...state.todos];
      const index = newList.findIndex(el => el.id === payload.id);
      newList[index].completed = payload.completed;
      state.todos = newList;
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(el => el.id !== id);
    },
    deleteTodos(state, listId) {
      state.todos = state.todos.filter(el => !listId.includes(el.id));
    },
    searchTodos(state, text) {
      state.isSearch = true;
      if (text.length === 0) {
        state.isSearch = false;
        state.todos;
      }
      state.todosSearch = [...state.todos].filter(el => {
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
    UPDATE_STATUS({ commit }, payload) {
      commit('updateStatus', payload);
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

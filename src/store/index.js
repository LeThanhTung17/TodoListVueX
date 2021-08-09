import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuid } from 'uuid';

Vue.use(Vuex);

const storeData = {
  state: {
    todos: [
      {
        id: uuid(),
        title: 'okok',
        date: new Date().toISOString().slice(0, 10),
        piority: 2,
        description: '',
        completed: false
      },
      {
        id: uuid(),
        title: 'okok1',
        date: new Date('08/30/2021').toISOString().slice(0, 10),
        piority: 0,
        description: 'hehe',
        completed: false
      },
      {
        id: uuid(),
        title: 'okok2',
        date: new Date('09/04/2021').toISOString().slice(0, 10),
        piority: 1,
        description: 'huhuhu',
        completed: false
      }
    ].sort((a, b) => new Date(a.date) - new Date(b.date)),
    todosSearch: []
  },
  getters: {
    isBulkActions: state => state.todos.some(todo => todo.completed),
    isCheckedAll: state => {
      const count = state.todos.filter(el => el.completed).length;
      return count === state.todos.length;
    },
    listIdChecked: state =>
      state.todos.filter(el => el.completed).map(el => el.id)
    // listTodo: state =>
    //   state.todosSearch.length !== 0 ? state.todosSearch : state.todos
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
    }
  }
};

const store = new Vuex.Store(storeData);

export default store;

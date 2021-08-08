import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeData = {
  state: {
    todos: [
      {
        id: 1,
        title: 'okok',
        date: new Date().toISOString().slice(0, 10),
        piority: 2,
        description: '',
        completed: false
      },
      {
        id: 2,
        title: 'okok1',
        date: new Date('08/30/2021').toISOString().slice(0, 10),
        piority: 0,
        description: 'hehe',
        completed: false
      },
      {
        id: 3,
        title: 'okok4',
        date: new Date().toISOString().slice(0, 10),
        piority: 1,
        description: 'huhuh',
        completed: true
      }
    ]
  },
  getters: {
    isBulkActions: state => state.todos.some(todo => todo.completed),
    isCheckedAll: state => {
      const count = state.todos.filter(el => el.completed).length;
      return count === state.todos.length;
    }
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
    }
  },
  actions: {}
};

const store = new Vuex.Store(storeData);

export default store;

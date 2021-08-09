<template>
  <div class="todoList">
    <h2>Todo List</h2>
    <Search />
    <div class="item">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <div class="bulk" v-if="isBulkActions">
      <BulkActions />
    </div>
  </div>
</template>

<script>
import TodoItem from '../TodoItem';
import Search from '../Search';
import BulkActions from '../BulkActions';
import { mapState, mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'TodoList',
  components: { TodoItem, BulkActions, Search },
  computed: {
    ...mapState(['todos', 'todosSearch']),
    ...mapGetters(['isBulkActions', 'listTodo'])
  },
  methods: {
    ...mapActions(['GET_TODOS'])
  },
  async created() {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=3'
      );
      this.GET_TODOS(res.data);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
.todoList {
  width: 500px;
  margin-bottom: 100px;
}
.bulk {
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
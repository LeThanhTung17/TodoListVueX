<template>
  <div class="todoList">
    <h2>Todo List</h2>
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
import BulkActions from '../BulkActions';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'TodoList',
  components: { TodoItem, BulkActions },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['isBulkActions'])
  }
};
</script>

<style>
.todoList {
  position: relative;
  width: 100%;
  margin-bottom: 100px;
}
.bulk {
  width: 100%;
  height: 100%;
}
</style>
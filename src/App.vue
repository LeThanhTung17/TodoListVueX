<template>
  <div id="app">
    <div class="todoForm">
      <h2>New Task</h2>
      <TodoForm />
    </div>
    <div class="todos">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: { TodoForm, TodoList }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
h2 {
  margin-bottom: 30px;
}
.todoForm {
  padding: 30px;
  border: 1px solid;
  width: 500px;
}
.todos {
  padding: 20px;
  border: 1px solid;
  border-left: none;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

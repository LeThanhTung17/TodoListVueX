<template>
  <div class="wrapperItem">
    <div class="todoItem">
      <div class="todoLeft">
        <input
          type="checkbox"
          class="checkbox"
          :checked="todo.completed"
          @change="changeStatusComplete(todo.id)"
        />
        <p class="titleItem" :title="todo.title">
          {{ todo.title }}
        </p>
      </div>
      <div class="todoRight">
        <div class="btnPrimary">
          <Button title="Detail" :onClick="showDetail" />
        </div>
        <div class="btnDanger">
          <Button
            :type="ButtonType.danger"
            title="Remove"
            :onClick="handleRemove"
          />
        </div>
      </div>
    </div>
    <div class="updateItem" v-if="show">
      <TodoForm :isUpdate="true" :valueTodo="{ ...todo }" />
    </div>
  </div>
</template>

<script>
import Button from '../Elements/Button';
import TodoForm from '../TodoForm';
import { ButtonType } from '../../enums';
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'TodoItem',
  components: { Button, TodoForm },
  props: { todo: Object },
  data() {
    return {
      ButtonType,
      show: false
    };
  },
  methods: {
    ...mapActions(['DELETE_TODO', 'UPDATE_STATUS']),
    handleRemove() {
      this.DELETE_TODO(this.todo.id);
    },
    async changeStatusComplete(id) {
      this.$store.commit('changeStatus', id);
      try {
        const res = await axios.put(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          { completed: !this.todo.completed }
        );
        this.UPDATE_STATUS(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    showDetail() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.updateItem {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 0 10px;
  border: 1px solid;
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}
.todoItem {
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 0;
  padding: 0 10px;
  border: 1px solid;
}
.todoLeft {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.todoRight {
  display: flex;
  justify-content: flex-end;
}
.btnPrimary {
  margin-right: 10px;
}
input.checkbox {
  display: block;
  cursor: pointer;
}
p.titleItem {
  margin: 0;
  margin-left: 10px;
}
.hideUpdateItem {
  display: none;
}
</style>
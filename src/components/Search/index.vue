<template>
  <div class="formSearch">
    <input
      type="text"
      @input="getTodos"
      v-model="currentValue.searchTxt"
      class="input"
      placeholder="Search..."
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      currentValue: {
        searchTxt: ''
      }
    };
  },
  methods: {
    ...mapMutations(['searchTodos']),
    getTodos() {
      setTimeout(() => {
        this.$store.commit('searchTodos', this.currentValue.searchTxt);
      }, 1500);
    }
  }
};
</script>

<style>
.formSearch {
  margin: 10px;
  display: flex;
}
.input {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  width: 100%;
  outline: none;
}
</style>
<template>
  <form @submit.prevent="onSubmit" class="formSearch">
    <Input type="search" v-model="currentValue.searchTxt" />
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import Input from '../Elements/Input';

export default {
  name: 'Search',
  components: { Input },
  methods: {
    ...mapMutations(['searchTodos']),
    onSubmit() {
      this.$store.commit('searchTodos', this.currentValue.searchTxt);
    }
  },
  data() {
    return {
      currentValue: {
        searchTxt: ''
      }
    };
  }
};
</script>

<style>
.formSearch {
  margin: 10px;
}
</style>
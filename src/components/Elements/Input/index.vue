<template>
  <div class="inputBox">
    <input
      type="text"
      :placeholder="!!type ? 'Search...' : 'Add new task...'"
      class="input"
      @change="onInputChange"
      v-model="currentValue"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    currentValue: String
  },
  data() {
    const onInputChange = event =>
      this.$emit('current-input', event.target.value);

    return {
      onInputChange
    };
  }
};
</script>

<style >
.inputBox {
  width: 100%;
  display: flex;
  margin: 15px 0;
}
.input {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  width: 100%;
  outline: none;
}
</style>
<template>
  <div class="inputBox">
    <input
      type="text"
      :required="required"
      :placeholder="!!type ? 'Search...' : 'Add new task...'"
      class="input"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    value: String,
    required: Boolean
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
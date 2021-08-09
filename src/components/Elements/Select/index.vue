<template>
  <select :value="value" @input="$emit('input', Number($event.target.value))">
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    options: Array,
    value: Number
  }
};
</script>

<style>
select {
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  outline: none;
}
option {
  padding: 10px;
}
</style>
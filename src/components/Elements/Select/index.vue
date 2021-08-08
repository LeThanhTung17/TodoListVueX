<template>
  <select @change="onSelectChange">
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.id"
      :selected="selected === option.id ? true : false"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    options: Array,
    selected: Number
  },
  data() {
    const onSelectChange = event => {
      this.$emit('current-select', event.target.value);
    };
    return {
      onSelectChange
    };
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
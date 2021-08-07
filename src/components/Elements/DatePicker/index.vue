<template>
  <input
    type="date"
    class="date"
    :min="new Date().toISOString().slice(0, 10)"
    v-model="currentDate"
    @change="onDateChange"
  />
</template>

<script>
export default {
  name: 'DatePicker',
  props: { currentValue: String },
  data() {
    const currentDate =
      this.$props.currentValue.length !== 0
        ? this.$props.currentValue
        : new Date().toISOString().slice(0, 10);

    const onDateChange = event => {
      this.$emit('current-date', event.target.value);
    };

    return {
      onDateChange,
      currentDate
    };
  }
};
</script>

<style>
.date {
  margin: 15px 0;
  padding: 2px 5px;
  width: 186px;
  outline: none;
}
</style>
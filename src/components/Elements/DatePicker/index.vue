<template>
  <input
    type="date"
    class="date"
    :min="getCurrentDateTime()"
    v-model="currentDate"
    @change="onDateChange"
  />
</template>

<script>
import { getCurrentDateTime } from '../../../helpers';

export default {
  name: 'DatePicker',
  props: { currentValue: String },
  data() {
    const currentDate =
      this.$props.currentValue.length !== 0
        ? this.$props.currentValue
        : getCurrentDateTime();

    const onDateChange = event => {
      this.$emit('current-date', event.target.value);
    };

    return {
      onDateChange,
      currentDate,
      getCurrentDateTime
    };
  }
};
</script>

<style>
.date {
  padding: 2px 5px;
  width: 200px;
  outline: none;
  display: flex;
}
</style>
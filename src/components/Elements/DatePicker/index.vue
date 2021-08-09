<template>
  <input
    type="date"
    class="date"
    :min="getCurrentDateTime()"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
import { getCurrentDateTime } from '../../../helpers';

export default {
  name: 'DatePicker',
  props: { value: String },
  data() {
    return {
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
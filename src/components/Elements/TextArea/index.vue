<template>
  <textarea v-model="currentValue" @change="onTextAreaChange" />
</template>

<script>
export default {
  name: 'TextArea',
  props: { currentValue: String },
  data() {
    const onTextAreaChange = event =>
      this.$emit('current-textarea', event.target.value);

    return {
      onTextAreaChange
    };
  }
};
</script>

<style>
textarea {
  width: 100%;
  height: 150px;
  border-radius: 5px;
  margin: 15px 0;
  outline: none;
}
</style>
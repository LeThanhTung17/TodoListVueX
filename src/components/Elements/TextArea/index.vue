<template>
  <div class="textearea">
    <textarea :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: { value: String }
};
</script>

<style>
.textearea {
  display: flex;
}
textarea {
  width: 100%;
  height: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 15px 0;
  outline: none;
}
</style>
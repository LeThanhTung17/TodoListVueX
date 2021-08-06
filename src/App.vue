<template>
  <div id="app">
    <Button type="primary" :loading="false" title="Detail" />
    <Button type="success" :loading="false" title="Success" />
    <Button type="danger" :loading="true" title="Delete" />
  </div>
</template>

<script>
import Button from './components/Button/index.vue';
export default {
  name: 'App',
  components: { Button }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

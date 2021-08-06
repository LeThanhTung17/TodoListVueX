<template>
  <button :style="{ background: getColor(type), width: '100%' }">
    <div v-if="loading" class="spin"><Loading /></div>
    <!-- <Loading /> -->
    {{ title }}
  </button>
</template>

<script>
import Loading from '../Loading';

export default {
  name: 'Button',
  components: {
    Loading
  },
  props: ['loading', 'title', 'type', 'size'],
  data() {
    const getColor = color => {
      switch (color) {
        case 'primary':
          return '#2196f3';
        case 'success':
          return '#0fbd3a';
        case 'danger':
          return '#f44336';
        default:
          return '#2196f3';
      }
    };

    return {
      getColor
    };
  }
};
</script>

<style>
button {
  padding: 10px 20px;
  margin: 5px;
  color: #fff;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.spin {
  margin-right: 5px;
}
</style>
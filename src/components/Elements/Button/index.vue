<template>
  <button
    :class="{ [getColor(type)]: true, [getSize(size)]: true }"
    :disabled="loading"
  >
    <div v-if="loading" class="spin"><Loading /></div>
    {{ title }}
  </button>
</template>

<script>
import Loading from '../Loading';
import { ButtonSize, ButtonType } from '../../../enums';

export default {
  name: 'Button',
  components: {
    Loading
  },
  props: {
    loading: Boolean,
    type: String,
    size: String,
    title: String
  },
  data() {
    const getColor = type => {
      switch (type) {
        case ButtonType.primary:
          return 'bgPrimary';
        case ButtonType.success:
          return 'bgSuccess';
        case ButtonType.danger:
          return 'bgDanger';
        default:
          return 'bgPrimary';
      }
    };
    const getSize = size => {
      switch (size) {
        case ButtonSize.large:
          return 'sizeLarge';
        case ButtonSize.full:
          return 'sizeFull';
        default:
          return '';
      }
    };

    return {
      getColor,
      getSize
    };
  }
};
</script>

<style>
button {
  padding: 10px 20px;
  margin: 15px 0;
  color: #fff;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
}
.spin {
  margin-right: 5px;
}
.bgPrimary {
  background-color: #2196f3;
}
.bgSuccess {
  background-color: #0fbd3a;
}
.bgDanger {
  background-color: #f44336;
}
.sizeLarge {
  padding: 15px 30px;
}
.sizeFull {
  width: 100%;
}
</style>
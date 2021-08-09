<template>
  <div class="bulkActions">
    <p class="titleBulk">Bulk Actions:</p>
    <div class="todoRight">
      <div class="btnPrimary">
        <Button
          title="Check All"
          :disabled="isCheckedAll"
          :onClick="changeAllStatus"
          :size="ButtonSize.large"
        />
      </div>
      <div class="btnDanger">
        <Button
          :type="ButtonType.danger"
          title="Remove"
          :onClick="removeAllTodo"
          :size="ButtonSize.large"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Elements/Button';
import { ButtonType, ButtonSize } from '../../enums';
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'BulkActions',
  components: { Button },
  computed: { ...mapGetters(['isCheckedAll', 'listIdChecked']) },
  methods: {
    ...mapMutations(['changeAllStatus']),
    ...mapActions(['deleteTodos']),
    removeAllTodo() {
      this.$store.dispatch('DELETE_TODOS', this.listIdChecked);
    }
  },
  data() {
    return { ButtonType, ButtonSize };
  }
};
</script>

<style>
.bulkActions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid;
  background-color: rgb(190, 190, 190);
}
.todoRight {
  display: flex;
  justify-content: flex-end;
}
.titleBulk {
  margin: 0;
}
.btnPrimary {
  margin-right: 10px;
}
</style>
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
          :onClick="() => {}"
          :size="ButtonSize.large"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Elements/Button';
import { ButtonType, ButtonSize } from '../../enums';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'BulkActions',
  components: { Button },
  computed: { ...mapGetters(['isCheckedAll']) },
  methods: { ...mapMutations(['changeAllStatus']) },
  data() {
    return { ButtonType, ButtonSize };
  }
};
</script>

<style>
.bulkActions {
  /* position: absolute; */
  bottom: -100px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px 0;
  padding: 0 10px;
  border: 1px solid;
  /* width: 100%; */
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
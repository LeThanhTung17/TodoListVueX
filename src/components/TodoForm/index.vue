<template>
  <div class="addLayout">
    <form @submit.prevent="onSubmit">
      <Input v-model="currentValue.title" :required="true" />
      <p>Description</p>
      <TextArea v-model="currentValue.description" />
      <div class="row">
        <div class="datepicker">
          <p>Due Date</p>
          <DatePicker v-model="currentValue.date" />
        </div>
        <div class="piority">
          <p>Piority</p>
          <Select :options="Piority" v-model="currentValue.piority" />
        </div>
      </div>
      <Button
        :type="ButtonType.success"
        :size="ButtonSize.full"
        :title="isUpdate ? 'Update' : 'Add'"
        :onClick="() => {}"
        :loading="loading"
      />
    </form>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import Button from '../Elements/Button';
import Select from '../Elements/Select';
import Input from '../Elements/Input';
import TextArea from '../Elements/TextArea';
import DatePicker from '../Elements/DatePicker';
import { ButtonType, ButtonSize, OptionValues } from '../../enums';
import { getCurrentDateTime } from '../../helpers';
import { mapActions } from 'vuex';

export default {
  name: 'TodoForm',
  components: { Button, Select, Input, TextArea, DatePicker },
  props: { isUpdate: Boolean, valueTodo: Object },
  methods: {
    ...mapActions(['addTodo', 'updateTodo']),
    resetForm() {
      this.currentValue = {
        date: this.getCurrentDateTime(),
        title: '',
        piority: 1,
        description: '',
        completed: false
      };
    },
    onSubmit() {
      this.loading = true;
      if (this.isUpdate) {
        this.$store.dispatch('UPDATE_TODO', this.currentValue);
        alert('Updated!');
      } else {
        this.$store.dispatch('ADD_TODO', {
          ...this.currentValue,
          id: uuid(),
          completed: false
        });
        this.resetForm();
        alert('Created!');
      }
      this.loading = false;
    }
  },
  data() {
    const defaultTask = {
      date: getCurrentDateTime(),
      title: '',
      piority: 1,
      description: ''
    };

    let loading = false;

    const currentValue = this.$props.isUpdate
      ? this.$props.valueTodo
      : defaultTask;

    const Piority = [
      {
        id: OptionValues.low,
        title: 'Low'
      },
      {
        id: OptionValues.normal,
        title: 'Normal'
      },
      {
        id: OptionValues.high,
        title: 'High'
      }
    ];

    return {
      ButtonType,
      ButtonSize,
      OptionValues,
      Piority,
      currentValue,
      loading,
      getCurrentDateTime
    };
  }
};
</script>

<style>
.addLayout {
  width: 100%;
}
.row {
  display: flex;
  justify-content: space-between;
}
p {
  text-align: left;
  margin-bottom: 0px;
}
</style>
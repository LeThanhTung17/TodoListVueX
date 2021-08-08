<template>
  <div class="addLayout">
    <form @submit.prevent="submit">
      <Input
        @current-input="getCurrentTitle"
        :currentValue="currentValue.title"
      />
      <p>Description</p>
      <TextArea
        @current-textarea="getCurrentDesc"
        :currentValue="currentValue.description"
      />
      <div class="row">
        <div class="datepicker">
          <DatePicker
            @current-date="getCurrentDate"
            :currentValue="currentValue.date"
          />
        </div>
        <div class="piority">
          <Select
            :options="Piority"
            :selected="OptionValues.normal"
            :currentValue="currentValue.piority"
            @current-select="getCurrentPiority"
          />
        </div>
      </div>
      <Button
        :type="ButtonType.success"
        :size="ButtonSize.full"
        :title="isUpdate ? 'Update' : 'Add'"
        :onClick="() => {}"
      />
    </form>
  </div>
</template>

<script>
import Button from '../Elements/Button';
import Select from '../Elements/Select';
import Input from '../Elements/Input';
import TextArea from '../Elements/TextArea';
import DatePicker from '../Elements/DatePicker';
import { ButtonType, ButtonSize, OptionValues } from '../../enums';
import { getCurrentDateTime } from '../../helpers';

export default {
  name: 'TodoForm',
  components: { Button, Select, Input, TextArea, DatePicker },
  props: { isUpdate: Boolean, valueTodo: Object },
  data() {
    const defaultTask = {
      date: getCurrentDateTime(),
      title: 'okoko',
      piority: 1,
      description: 'kaka'
    };

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

    const getCurrentDate = value => (currentValue.date = value);
    const getCurrentTitle = value => (currentValue.title = value);
    const getCurrentDesc = value => (currentValue.description = value);
    const getCurrentPiority = value => (currentValue.piority = value);

    const submit = () => console.log('submit');
    return {
      ButtonType,
      ButtonSize,
      OptionValues,
      Piority,
      currentValue,
      getCurrentDate,
      getCurrentTitle,
      getCurrentDesc,
      getCurrentPiority,
      submit
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
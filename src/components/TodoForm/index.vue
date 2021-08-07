<template>
  <div class="addLayout">
    <h2>New Task</h2>
    <form @submit.prevent="submit">
      <Input
        @current-input="getCurrentTitle"
        :currentValue="defaultTask.title"
      />
      <p>Description</p>
      <TextArea
        @current-textarea="getCurrentDesc"
        :currentValue="defaultTask.description"
      />
      <div>
        <div class="date">
          <DatePicker
            @current-date="getCurrentDate"
            :currentValue="defaultTask.date"
          />
        </div>
        <div class="piority">
          <Select
            :options="Piority"
            :selected="OptionValues.normal"
            :currentValue="defaultTask.piority"
            @current-select="getCurrentPiority"
          />
        </div>
      </div>
      <Button :type="ButtonType.success" :size="ButtonSize.full" title="Add" />
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

export default {
  name: 'TodoForm',
  components: { Button, Select, Input, TextArea, DatePicker },
  data() {
    const defaultTask = {
      date: '',
      title: 'okoko',
      piority: 1,
      description: 'kaka'
    };
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

    const getCurrentDate = value => (defaultTask.date = value);
    const getCurrentTitle = value => (defaultTask.title = value);
    const getCurrentDesc = value => (defaultTask.description = value);
    const getCurrentPiority = value => (defaultTask.piority = value);

    const submit = () => console.log(defaultTask.title);
    return {
      ButtonType,
      ButtonSize,
      OptionValues,
      Piority,
      defaultTask,
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
</style>
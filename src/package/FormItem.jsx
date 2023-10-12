import {
    ElInput,
    ElSelect,
    ElOption,
    ElButton
  } from 'element-plus'

import { defineComponent } from 'vue'

  // 普通显示
const Span = (form, data) => (
    <span>{data}</span>
  )

// 输入框
const Input = (form, data) => (
  <ElInput
      v-model={form[data.field]}
      type={data.type}
      input-style={data.inputStyle}
      size={data.size}
      autocomplete={data.autocomplete}
      show-password={data.type == 'password'}
      clearable
      placeholder={data.placeholder}
      autosize = {{
        minRows: 3,
        maxRows: 4,
      }}
      {...data.props}
    >
    </ElInput>
  )
// 文本框
const Textarea = (form, data) => (
  <ElInput
      v-model={form[data.field]}
      type={data.type}
      input-style={data.inputStyle}
      size={data.size}
      // 设置rows就不能设置自适应autosize
      rows={data.rows}
      clearable={data.clearable}
      placeholder={data.placeholder}
      {...data.props}
    >{data.rows}
    </ElInput>
  )

  const setLabelValue = (_item, { optionsKey } = {}) => {
    return {
      label: optionsKey ? _item[optionsKey.label] : _item.label,
      value: optionsKey ? _item[optionsKey.value] : _item.value,
    }
  }
  // 选择框
  const Select = (form, data) => (
    <ElSelect
      size={data.size}
      v-model={form[data.field]}
      filterable
      style={data.style}
      clearable={data.clearable}
      placeholder={data.placeholder}
      {...data.props}
    >
      {data.options.map((item) => {
        return <ElOption {...setLabelValue(item, data)} />
      })}
    </ElSelect>
  )

  const Button = (form, data) =>{
    <ElButton
        type={data.type}
        size={data.size}
        icon={data.icon}
        plain={data.plain}
        click={data.clickBtn}
        value={data.value}
    ></ElButton>
  }

  const setFormItem = (
    form,
    data,
    editable,
  ) => {
    if (!form) return null
    if (!editable) return Span(form, data)

    switch (data.type) {
      case 'input':
        return Input(form, data)
      case 'textarea':
        return Textarea(form, data)
      case 'password':
        return Input(form, data)
        // 输入框只能输入数字
      case 'number':
        return Input(form, data)
      case 'select':
        return Select(form, data)
      case 'date':
      case 'daterange':
        return Date(form, data)
      case 'time':
        return Time(form, data)
      case 'radio':
        return Radio(form, data)
      case 'checkbox':
        return Checkbox(form, data)
      case 'button':
        return Button(form, data)
      default:
        return null
    }
  }

  export default () =>
  defineComponent({
    props: {
      data: Object,
      formData: Object,
      editable: Boolean,
    },
    setup(props) {
      return () =>
        props.data
          ? setFormItem(props.formData, props.data, props.editable)
          : null
    },
  })
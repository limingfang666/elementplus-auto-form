import {
    ElButton, ElIcon
  } from 'element-plus'
import { defineComponent } from 'vue'

  const Button = (form, data) =>(
    !data.isHidden?<ElButton
        type={data.type}
        size={data.size}
        icon= {data.icon}
        plain={data.plain}
        onClick={data.onClick}
        >
          {data.name}</ElButton>:''
  )

  const setBottonItem = (
    form,
    data,
    editable,
  ) => {
      if(!data) return null;
      if (!editable) return Span(form, data)
    return Button(form, data);
  }

export default () =>
defineComponent({
  props: {
    data: Object,
    formData: Object,
    editable: Boolean,
  },
  //不能直接用click 如果一个原生事件的名字 (例如 click) 被定义在 emits 选项中，则监听器只会监听组件触发的 click 事件而不会再响应原生的 click 事件。
  emits:['onClick'],
  setup(props) {
    return () =>
      props.data
        ? setBottonItem(props.formData, props.data, props.editable)
        : null
  },
})
<template>
  <el-form ref="FormRef"
    :class="formBorder?'form-border':''"
    :model="modelForm"
    :rules="editable ? rules : {}"
    :inline="inline"
    :label-position="labelPosition"
    :label-width="labelWidth">
    <slot name="header"></slot>
    <el-row :gutter="elRowGutter">
      <el-col v-for="(item,index) in data"
              :span="item.span" :key="index">
              <!-- !item.isHidden为控制页面控件显示与否 -->
        <el-form-item v-if="!item.isHidden" :class="isCustom?'custom-form-item':''" :label="item.label ? item.label + '：' : ''"
                      :prop="item.prop"
                      :label-width="item.labelWidth">
          <FormItem :formData="modelForm"
                    :editable="editable"
                    :data="item">
          </FormItem>
          <FormItem v-if="item.children" :formData="modelForm"
                    :editable="editable"
                    :clearable="false"
                    :data="item.children">
          </FormItem>
          
        </el-form-item>
      </el-col>
      <el-col class="button-list" v-if="btnList && btnList.length"
              :span="24">
        <el-form-item :class="isCustom?'custom-form-item':''">
          <div v-for="(item,index) in btnList" :key="index">
            <FormButton :formData="modelForm"
                    :editable="editable"
                    :data="item"
                    @on-click="onClick(item)"
                    ></FormButton>
          </div>
        </el-form-item>
      </el-col>
      <slot name="footer"></slot>
    </el-row>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import formItem from './FormItem.jsx'
import formButton from './FormButton.jsx'

// 除data外其他都不是必传项
const prop = defineProps({
  modelForm:{
    type: Object,
    require: true,
  },
  rules: {
    type: Object,
    default: {}
  },
  data: {
    type: Object,
    require: true,
    default: []
  },
  inline:{
    type: Boolean,
    default: true
  },
  labelWidth: {
    type: String,
    default: '120'
  },
  labelPosition: {
    type: String,
    default: 'right'
  },
  editable: {
    type: Boolean,
    default: true
  },
  colLayout: {
    type: Object,
    default(){
      return {
        xl: 5, //2K屏等
        lg: 8, //大屏幕，如大桌面显示器
        md: 12, //中等屏幕，如桌面显示器
        sm: 24, //小屏幕，如平板
        xs: 24 //超小屏，如手机
      }
    }
  },
  elRowGutter: {
    type: Number,
    default: 10
  },
  size: {
    type: String,
    default: 'default'
  },
  btnList:{
    type: Object,
    default: []
  },
  formBorder:{
    type: Boolean,
    default: false
  },
  formRef:{
    type: String,
    default: 'formRef'
  },
  customFormItem:{
    type: Boolean,
    default: false
  }

})

const FormItem = formItem();
const FormButton = formButton();

const FormRef = ref()
const isCustom = ref(false);

// 表单按钮
function onClick(data) {
  if (!data.onClick) return
  data.onClick()
}

// 表单校验
async function validate() {
  if (!FormRef.value) return
  const result = await FormRef.value.validate()
  return result;
}

// 清除表单验证
async function resetFields() {
  if(!FormRef.value) return await FormRef.value.resetFields();
  return await FormRef.value.resetFields()
}

// 自定义el-form-item样式
if(prop.customFormItem){
  isCustom.value = true;
}

defineExpose({
  validate,
  resetFields,
})

</script>
<style scoped>
.button-list{
  display: flex;
  justify-content: center;
}

.form-border {
  width: 94%;
  border: solid 2px rgba(219, 217, 217, 0.6);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

.custom-form-item {
  margin-bottom: 4px;
  margin-right: 12px;
  margin-left: 12px;
}
</style>


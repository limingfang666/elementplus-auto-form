<script setup>
import { reactive } from 'vue'
import cronjobConfig from '@/components/cronjobConfig'
const formItems = cronjobConfig.value.formItems ? cronjobConfig.value.formItems : {};
const cronjobForm = reactive({
  iffLength: '1793',
  keySize: '',
  dataFileName: '',
  wfdName: '',
  version:''
})
</script>

<template>
  <t-form ref="cronjobFormRef" :btnList="cronjobConfig.buttons" :modelForm="cronjobForm" :formBorder="true"
      :rules="cronjobConfig.rules" :data="formItems">
      <template #header>
        <b>请输入转码程序生成条件：</b><br /><br />
      </template>
    </t-form>
</template>

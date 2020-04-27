<template>
  <form class="enter-sum" @submit.prevent="$emit('submit', value)">
    <UINumberInput
      :placeholder="80000"
      :label="label"
      :hideInput="hideInput"
      v-model="value"
    />
    <UIButton class="enter-sum__submit">submit</UIButton>
  </form>
</template>
<script>
import UINumberInput from '@/components/ui/number-input'
import UIButton from '@/components/ui/button'

export default {
  components: {
    UINumberInput,
    UIButton
  },
  props: {
    label: {
      type: String,
      default: 'Enter sum:'
    },
    hideInput: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      value: undefined
    }
  }
}
</script>
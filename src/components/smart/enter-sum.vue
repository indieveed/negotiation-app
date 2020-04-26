<template>
  <form class="enter-sum">
    <UINumberInput
      :placeholder="80000"
      :label="label"
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
    }
  }
}
</script>
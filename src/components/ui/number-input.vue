<template>
  <label class="number-input">
    <span class="number-input__label">{{label}}</span>
    <input
      :placeholder="placeholder"
      :value="value"
      :required="required"
      @change="$emit('change', value)"
      class="number-input__field"
      type="number"
    >
  </label>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: Number,
      default: 0
    },
    value: {
      type: Number
    },
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.number-input {

  &__label {
    display block
    padding .75rem
    font-size 1rem
    margin-bottom 0.5em
  }

  &__field {
    font-size 1rem
    font-family inherit
    background-color $fg-color
    padding .75rem
    transition .1s ease
    border 2px solid transparent
    margin-left 0.5em

    &:focus {
      outline 0
      border 2px dashed $bg-color
    }
  }
}
</style>
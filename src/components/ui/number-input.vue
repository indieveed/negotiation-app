<template>
  <label class="number-input">
    <span class="number-input__label">{{label}}</span>
    <input
      :placeholder="placeholder"
      :value="value"
      :required="required"
      @input="$emit('input', +$event.target.value)"
      :class="{
        'is-hidden': hideInput
      }"
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
    },
    hideInput: {
      type: Boolean,
      default: false
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
    max-width 60vw
    margin-bottom 1em

    &:focus {
      outline 0
      border 2px dashed $bg-color
    }

    &.is-hidden {
      opacity 0
      pointer-events none
      transition 2s ease
    }
  }
}

</style>
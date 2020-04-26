<template>
  <button class="button"><slot/></button>
</template>
<style lang="stylus" scoped>
.button {
  font-family inherit
  background-color $bg-color
  color $fg-color
  border 2px solid
  padding .75em
  cursor pointer
  font-size 1rem

  &:hover,
  &:focus {
    background-color $fg-color
    color $bg-color
    outline 0
  }
}
</style>
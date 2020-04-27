<template>
  <div class="tabs">
    <div class="tabs__header" role="tablist">
      <template v-for="(item, index) in items">
        <input
          :key="`input-${index}`"
          v-model="currentTab"
          :id="`${name}-${index}`"
          :value="`${name}-${index}`"
          :checked="currentTab === `${name}-${index}`"
          :name="name"
          type="radio"
          class="tabs__input"
          role="tab"
        >
        <label
          :key="`label-${index}`"
          :for="`${name}-${index}`"
          class="tabs__label"
        >{{item.text}}</label>
      </template>
    </div>
    <div class="tabs__body">
      <template v-for="(item, index) in items">
        <div
          :key="`panel-${index}`"
          :name="name"
          class="tabs__panel"
          role="tabpanel"
          tabindex="0"
          :aria-labelledby="`${name}-${index}`"
          :class="{
            'is-current': currentTab === `${name}-${index}`
          }"
        >
          <slot name="panel" v-bind:item="item"></slot>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
let id = 0;
export default {
  data() {
    return {
      name: `tabs-${id}`,
      currentTab: `tabs-${id}-0`
    }
  },
  beforeCreate() {
    id++
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="stylus" scoped>
.tabs {
  display flex
  flex-direction column
  max-width 960px
  margin-left auto
  margin-right auto

  &__input {
    width 0
    height 0
    z-index -1
    margin 0
  }

  &__input:checked + &__label {
    background-color $fg-color
    color $bg-color
  }

  &__input:focus + &__label {
    border 2px dashed $bg-color
    outline 0
  }

  &__header {
    display flex
    flex-wrap wrap
  }

  &__label {
    padding 1em
    border  2px solid
    display block
    cursor pointer
  }

  &__body {
    border 2px solid
  }
  
  &__panel {
    min-height 300px
    display none
    justify-content center
    align-items center

    &.is-current {
      display flex
    }
  }
}
</style>
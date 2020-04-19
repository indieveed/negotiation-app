<template>
  <div class="tabs">
    <div class="tabs__header">
      <template v-for="(item, index) in items">
        <input :key="`input-${index}`" :id="`${name}-${index}`" type="radio" :name="name" class="tabs__input">
        <label :key="`label-${index}`" :for="`${name}-${index}`" class="tabs__label"></label>
      </template>
    </div>
    <div class="tabs__body">
      <template v-for="(item, index) in items">
        <div :key="`panel-${index}`"  :name="name" class="tabs__panel">
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
      name: `tabs-${id}`
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
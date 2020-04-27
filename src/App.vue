<template>
  <div id="app">
    <h1>Choose your destiny</h1>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app {
  font-family: 'Press Start 2P', monospace;
  line-height: 1.7;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  padding-left 1rem
  padding-right 1rem
  height 100%
  display flex
  flex-direction column
}
</style>

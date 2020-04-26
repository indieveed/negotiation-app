<template>
  <transition
    name="modal"
    :appear="true"
  >
  <div class="modal">
    <a href="#close" class="modal__overlay" aria-label="Close" @click="close"></a>
    <div class="modal__container">
      <button href="#close" class="btn modal__close" aria-label="Close" @click="close">
      </button>
      <div class="modal__header">
        <slot name="header" />
      </div>
      <div ref="body" class="modal__body" tabindex="0">
        <slot name="body" />
      </div>
      <div v-if="$slots.footer" class="modal__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
  </transition>
</template>
<script>

export default {
  data() {
    return {
      hideAnimation: false,
    }
  },
  beforeMount() {
    document.addEventListener('keydown', this.keyDownHandler)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keyDownHandler)
    document.body.style.overflow = ''
  },
  methods: {
    keyDownHandler(e) {
      if (e.keyCode === 27) {
        this.close()
      }
    },
    close() {
      this.$emit('close')
    }
  },
}
</script>
<style lang="stylus" scoped>
.modal {
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 1000
  display flex
  justify-content center
  align-items center

  &__container {
    padding: 1.2rem;
    width: 960px;
    max-width: 100%;
    position relative
    border 2px solid
    padding 1rem
    min-height 50%
    background-color $bg-color
  }

  &__close {
    background-image url('../../assets/icons/cross.svg')
    background-size 100%
    background-color transparent
    width: 2rem;
    height: 2rem;
    border: 0;
    position absolute
    right 1rem
    top 1rem
    cursor pointer

    &:focus {
      outline 0
    }

    &:active,
    &:hover {
      opacity: 0.8;
    }

    &:active {
      background-color: rgba(0,0,0,0.05);
      outline: 0;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="modal_episode">
    <div class="modal_episode__fundo">
      <div class="modal_episode__dialog"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs } from '@vue/reactivity'

export default defineComponent({
  name: 'MoreInformation',
  setup() {
    const state = reactive({
      show: false
    })

    function closeModal() {
      state.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    }

    function openModal() {
      state.show = true
      document.querySelector('body').classList.add('overflow-hidden')
    }

    return {
      ...toRefs(state),
      closeModal,
      openModal
    }
  }
})
</script>

<style lang="scss" scoped>
.modal_episode {
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__fundo {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    width: 700px;
    height: 550px;
  }
}
</style>
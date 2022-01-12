<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__dialog">
        <div class="modal__header">
          <h3>{{ char.name }}</h3>
          <button type="button" class="modal__close" @click="closeModal()">
            x
          </button>
        </div>

        <div class="modal__body">
          <div>
            <img class="image" :src="char.image" alt="" />
          </div>
          <p>
            <strong>Apears in: </strong
            ><span>{{ char.episode.length }} episodes</span>
          </p>
          <p>
            <strong>Gender: </strong><span>{{ char.gender }}</span>
          </p>
          <p>
            <strong>Last location: </strong
            ><span>{{ char.location.name }}</span>
          </p>
          <p>
            <strong>Is: </strong><span>{{ char.status }}</span>
          </p>
          <p>
            <strong>Origin location : </strong
            ><span>{{ char.origin.name }}</span>
          </p>
          <p>
            <strong>Species : </strong><span>{{ char.species }}</span>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@vue/runtime-core'

export default defineComponent({
  name: 'MoreInformation',
  props: {
    char: {
      type: Array
    }
  },
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
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.image {
  border-radius: 50%;
  width: 50%;
}
</style>
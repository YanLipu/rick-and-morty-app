<template>
  <div class="card-informations">
    <img :src="image" class="ellipse-1" alt="" />
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <div class="ant-designheart-filled">
          <img
            src="https://static.overlay-tech.com/assets/037ebe6a-b23e-440d-bee4-56e345fc5395.svg"
            alt=""
          />
        </div>
        <p class="alive">{{ status }}</p>
      </div>
      <div class="relative-wrapper-two">
        <p class="rick-sanchez">{{ name }}</p>
      </div>
      <div class="relative-wrapper-two">
        <p class="alive">{{ status }}</p>
        <p class="alive">{{ status }}</p>
        <p class="alive">{{ species }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs } from '@vue/reactivity'

export default defineComponent({
  props: {
    name: {
      type: String
    },
    status: {
      type: String
    },
    species: {
      type: String
    },
    image: {
      type: String
    }
  },
  setup() {
    const state = reactive({
      teste: ''
    })

    function clickTest() {
      console.log('clicou')
    }

    return {
      ...toRefs(state),
      clickTest
    }
  }
})
</script>

<style>
.card-informations {
  padding: 86px 0 0;
}
.ellipse-1 {
  width: 38.69%;
  height: 45.72%;
  position: absolute;
  right: 135px;
  top: 0;
  box-shadow: 0 -2px 4px 0 $transparent-black-2;
  border-radius: 50%;
}
.flex-wrapper-one {
  background: linear-gradient($light-steel-blue, $light-steel-blue),
    $light-steel-blue;
  border-radius: 8px;
  padding: 96px 55px 65px 33px;
  box-shadow: 0 0 0 4px $transparent-black, 0 0 0 4px $transparent-black;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.relative-wrapper-one {
  width: 18.36%;
  height: 45.67%;
  margin-top: 69px;
  margin-right: 40px;
  position: relative;
}
.ant-designheart-filled {
  width: calc(76.92% - 7.82px);
  height: calc(86.21% - 12.21px);
  padding: 6.1px 3.91px 6.11px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 3px;
  bottom: -39px;
}
.vector {
  width: 100%;
  align-self: stretch;
  object-fit: cover;
}
.alive {
  width: 100%;
  height: 100%;
  color: $black;
  position: relative;
  letter-spacing: 2px;
  @include dongle-40-bold;
}
.flex-wrapper-two {
  margin-right: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.rick-sanchez {
  height: 30.71%;
  color: $black;
  align-self: stretch;
  margin-bottom: 30px;
  @include londrina-solid-33-black;
}
.human {
  width: 56.02%;
  height: 45.67%;
  color: $black;
  margin-left: 32px;
  letter-spacing: 2px;
  @include dongle-40-bold;
}
.relative-wrapper-two {
  width: 14.69%;
  height: 45.67%;
  margin-top: 69px;
  position: relative;
}
.num-52 {
  width: 53.85%;
  height: 100%;
  color: $black;
  position: absolute;
  left: 9px;
  bottom: -43px;
  @include dongle-40-bold;
}
</style>
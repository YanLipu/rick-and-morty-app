<template>
  <div class="cards" @click="$emit('showMoreInfo')">
    <div class="card_img">
      <img :src="image" />
    </div>
    <div class="informations_container">
      <div class="card_infos">
        <div class="card_title">
          <h2>{{ name }}</h2>
        </div>
      </div>
      <div class="card_infos_itens">
        <div class="item">
          <p>
            <strong>State</strong>
          </p>
          <span>{{ status }}</span>
        </div>
        <div class="item">
          <p>
            <strong>{{ species }}</strong>
          </p>
        </div>
        <div class="item">
          <p>
            <strong>Episodes</strong>
          </p>
          <span>{{ status }}</span>
        </div>
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
.cards {
  border: 1px solid #ddd;
  border-radius: 6px;
  max-width: 33%;
  min-width: 350px;
  height: 220px;
  text-align: center;
  margin-top: 60px;
  background-color: #bcd2d9;
}
.cards:hover {
  transform: scale(1.01);
  cursor: pointer;
}
.card_img {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 100%;
  margin: -60px auto 0;
}
.card_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.card_infos_itens {
  display: flex;
  justify-content: space-around;
}
.informations_container {
  padding: 0;
  margin: 0;
}
</style>
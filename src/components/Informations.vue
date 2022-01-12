<template>
  <div class="cards" @click="$emit('showMoreInfo')">
    <article class="card">
      <header>
        <h2>{{ name }}</h2>
      </header>
      <img :src="image" />
      <div class="content">
        <p>
          <strong>State: </strong><span>{{ status }}</span>
        </p>

        <p>
          <strong>Species: </strong><span>{{ species }}</span>
        </p>
      </div>
    </article>
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
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  border-style: solid;
  transition: 0.5s all ease-in-out;
}
.cards:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
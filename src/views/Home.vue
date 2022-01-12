<template>
  <div>
    <h3>Rick and Morty Search</h3>
  </div>
  <div>
    <input
      class="input_field"
      v-model="search"
      type="text"
      placeholder="Search for character"
    />
  </div>
  <br />
  <div class="container">
    <Informations
      v-for="(char, index) in chars"
      :key="char.id"
      :name="char.name"
      :status="char.status"
      :species="char.species"
      :image="char.image"
      @showMoreInfo="teste(index)"
    />
  </div>
  <MoreInformation ref="moreInfo" :char="chars[idSelected]" />
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
import Informations from '../components/Informations.vue'
import MoreInformation from '../components/MoreInformation.vue'
import { http } from '../services/config'

export default defineComponent({
  components: {
    Informations,
    MoreInformation
  },
  setup() {
    const state = reactive({
      search: '',
      chars: [],
      timer: null,
      idSelected: null
    })

    watch(
      () => state.search,
      () => {
        if (state.search) {
          debounceEvent(searchElement, 2000)
        }
      }
    )

    function debounceEvent(fn, time) {
      clearTimeout(state.timer)

      state.timer = setTimeout(() => {
        fn()
      }, time)
    }

    function getChars() {
      http.get('character').then(response => {
        console.log('chars is: ', response.data)
        state.chars = response.data.results
        console.log('state.chars', state.chars[0].name)
      })
    }

    function teste(id) {
      this.$refs.moreInfo.openModal()
      state.idSelected = id
      console.log('clicou aqui', id)
    }

    function searchElement() {
      http.get(`character/?name=${state.search}`).then(response => {
        state.chars = response.data.results
        state.search = ''
      })
      console.log(state.search)
    }

    onMounted(() => {
      getChars()
    })

    return {
      ...toRefs(state),
      getChars,
      teste,
      searchElement,
      debounceEvent
    }
  }
})
</script>
<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
.input_field {
  border-color: #cccccc;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border-width: 2px;
  border-radius: 10px;
  border-style: solid;
  box-shadow: ;
}
</style>

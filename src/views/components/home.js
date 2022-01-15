import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
import Informations from '../../components/Informations.vue'
import MoreInformation from '../../components/MoreInformation.vue'
import Navbar from '../../components/Navbar.vue'
import { http } from '../../services/config'

export default defineComponent({
  components: {
    Informations,
    MoreInformation,
    Navbar
  },
  setup() {
    const state = reactive({
      search: '',
      chars: [],
      timer: null,
      idSelected: null,
      num: [],
      totalEps: null,
      totalLocations: null,
      totalChars: null
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

    async function randomNumber() {
      for (let i = 0; i < 3; i++) {
        let integer = Math.random() * (826 - 1) + 1
        state.num[i] = parseInt(integer, 10)
      }
    }

    async function getChars() {
      //await getGeneralInformation()
      await randomNumber()
      console.log('nummmm', state.num)
      http
        .get(`character/${state.num[0]},${state.num[1]},${state.num[2]}`)
        .then(response => {
          console.log('chars is: ', response.data)
          state.chars = response.data
          console.log('state.chars', state.chars)
        })

      http.get('character').then(response => {
        state.totalChars = response.data.info.count
        console.log('state.totalChars', state.totalChars)
      })

      http.get('episode').then(response => {
        state.totalEps = response.data.info.count
        console.log('state.totalEps', state.totalEps)
      })

      http.get('location').then(response => {
        state.totalLocations = response.data.info.count
        console.log('state.totalLocations', state.totalLocations)
      })
    }

    function getGeneralInformation() {
      //http.get('location').then(response => {
      //  state.totalLocations = response
      //})
      //http.get('episode').then(response => {
      //  state.totalEps = response
      //})
      //console.log(' state.totalLocations', state.totalLocations)
      //console.log(' state.totalLocations', state.totalLocations)
    }

    function teste(id) {
      this.$refs.moreInfo.openModal()
      state.idSelected = id
      console.log('clicou aqui', id)
    }

    function searchElement() {
      http.get(`character/?name=${state.search}`).then(response => {
        state.chars = response.data.results
        console.log('response.data', response.data)
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
      debounceEvent,
      randomNumber,
      getGeneralInformation
    }
  }
})

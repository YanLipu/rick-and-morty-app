import { defineComponent } from '@vue/composition-api'
import { computed, onMounted, reactive, toRefs, watch } from 'vue'
import TabContent from '../../../components/TabContent.vue'
import { http, youtube } from '../../../services/config'

export default defineComponent({
  components: {
    Tabs: TabContent
  },
  setup() {
    const state = reactive({
      search: '',
      seasons: [],
      episodes: [],
      teste: [],
      configs: [],
      searchResult: [],
      timer: null,
      showTabs: true,
      videos: []
    })

    watch(
      () => state.search,
      () => {
        if (state.search) {
          debounceEvent(searchEpisode, 2000)
        }
      }
    )

    function debounceEvent(fn, time) {
      clearTimeout(state.timer)

      state.timer = setTimeout(() => {
        fn()
      }, time)
    }

    async function getEpisodes() {
      for (let i = 1; i <= 3; i++) {
        await http.get(`episode?page=${i}`).then(response => {
          response.data.results.forEach(element => {
            state.episodes.push(element)
          })
        })
      }
      getSeasons()
    }

    function getSeasons() {
      state.episodes.forEach(element => {
        const seasonNum = element.episode.slice(0, 3)
        if (seasonNum === 'S01') {
          state.seasons[0] = 'Season 1'
        } else if (seasonNum === 'S02') {
          state.seasons[1] = 'Season 2'
        } else if (seasonNum === 'S03') {
          state.seasons[2] = 'Season 3'
        } else if (seasonNum === 'S04') {
          state.seasons[3] = 'Season 4'
        } else if (seasonNum === 'S05') {
          state.seasons[4] = 'Season 5'
        }
      })
    }

    async function searchEpisode() {
      state.showTabs = false
      await http.get(`episode/${state.search}`).then(response => {
        state.searchResult = response
        //state.search = ''
      })
      await youtube
        .get('/search', {
          params: {
            q: `rick and morty episode ${state.search}`
          }
        })
        .then(response => {
          console.log(response)
        })
    }

    const configTabElements = computed(() => {
      return state.teste
    })

    onMounted(() => {
      getEpisodes()
    })

    return {
      ...toRefs(state),
      getEpisodes,
      configTabElements,
      getSeasons,
      searchEpisode,
      debounceEvent
    }
  }
})

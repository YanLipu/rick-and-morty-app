<template>
  <div id="tabs" class="container_tabs">
    <div class="tabs">
      <a
        @click="activetab = index"
        v-bind:class="[activetab === index ? 'active' : '']"
        v-for="(item, index) in seasons"
        :key="item"
        >{{ item }}</a
      >
    </div>

    <div class="content">
      <div v-for="(ep, index) in episodesList" :key="ep">
        <div class="episodes_information">
          <div class="video_thumb">
            <img :src="videosList[index][0].snippet.thumbnails.high.url" />
          </div>
          <div class="ep_infos">
            <h4>{{ ep.name }}</h4>
            <p>{{ ep.episode }}</p>
            <p>{{ ep.characters.length }}</p>
            <p>{{ ep.air_date }}</p>
            <a @click="openAllChars()">Ver todos os personagens</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs, computed } from '@vue/reactivity'
import { nextTick, onMounted, watch } from '@vue/runtime-core'
import { youtube } from '../services/config'
//import { onMounted } from '@vue/runtime-core'

export default defineComponent({
  props: {
    seasons: {
      type: Array
    },
    episodes: {
      type: Array
    }
  },
  setup(prop) {
    const state = reactive({
      el: '#tabs',
      activetab: null,
      episodesList: [],
      videosList: []
    })

    watch(
      () => state.activetab,
      () => selectedShowedEps()
    )

    async function selectedShowedEps() {
      if (state.activetab === 0) {
        state.episodesList = []
        prop.episodes.forEach(element => {
          if (element.episode.includes('S01')) {
            state.episodesList.push(element)
          }
        })
        listVideos(state.episodesList)
      } else if (state.activetab === 1) {
        state.episodesList = []
        prop.episodes.forEach(element => {
          //const seasonNum = element.episode.slice(0, 3)

          if (element.episode.includes('S02')) {
            state.episodesList.push(element)
          }
        })
        listVideos(state.episodesList)
        //
      } else if (state.activetab === 2) {
        state.episodesList = []
        prop.episodes.forEach(element => {
          //const seasonNum = element.episode.slice(0, 3)

          if (element.episode.includes('S03')) {
            state.episodesList.push(element)
          }
        })
        listVideos(state.episodesList)
      } else if (state.activetab === 3) {
        state.episodesList = []
        prop.episodes.forEach(element => {
          //const seasonNum = element.episode.slice(0, 3)
          if (element.episode.includes('S04')) {
            state.episodesList.push(element)
          }
        })
        listVideos(state.episodesList)
      } else if (state.activetab === 4) {
        state.episodesList = []
        prop.episodes.forEach(element => {
          //const seasonNum = element.episode.slice(0, 3)

          if (element.episode.includes('S05')) {
            state.episodesList.push(element)
          }
        })
        listVideos(state.episodesList)
      }
    }

    async function listVideos(eps) {
      console.log('eps', eps)
      await eps.forEach(element => [
        youtube
          .get('/search', {
            params: {
              q: `rick and morty ${element.episode}`
            }
          })
          .then(response => {
            if (state.videosList.length > 0) {
              state.videosList = []
            }
            state.videosList.push(response.data.items)
            console.log('a pesquisa dos videos é: ', state.videosList)
          })
          .catch(error => {
            console.log('error', error)
          })
      ])
    }

    //youtube api limits reqs

    const list = computed(() => {
      return state.episodesList
    })

    onMounted(async () => {
      await nextTick(function () {
        selectedShowedEps()
      })
    })

    return {
      ...toRefs(state),
      selectedShowedEps,
      onMounted,
      list,
      listVideos
    }
  }
})
</script>

<style>
.container_tabs {
  width: 100%;
  margin: 20px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}

/* Style the tabs */
.tabs {
  overflow: hidden;
  margin-bottom: -2px;
  flex-direction: column;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.episodes_information {
  display: flex;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.video_thumb {
  width: 220px;
  border-top-right-radius: 0;
  border-bottom-left-radius: calc(0.25rem - 1px);
  align-content: center;
}
.video_thumb img {
  width: 100%;
}
.ep_infos {
  flex: 1 1 auto;
  min-height: 1px;
}
</style>
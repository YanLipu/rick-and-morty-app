<template>
  <div class="main">
    <div class="presentation">
      <div class="title_message"><h1>Find any episode here</h1></div>
      <div class="search_box">
        <input
          class="input_field"
          v-model="search"
          type="text"
          placeholder="Ex: 12..."
        />
      </div>
    </div>
    <div class="tabs_content" v-if="showTabs">
      <Tabs :seasons="seasons" :episodes="episodes" />
    </div>
  </div>
</template>
<script src="./components/episodes.js">
</script>

<style>
.presentation_episodes {
  width: 100%;
  height: 300px;
  background-color: #00682f;
}
.tabs_content {
  display: inline-block;
}
.title_episodes {
  margin: 0;
  padding-top: 10px;
  color: white;
}
</style>
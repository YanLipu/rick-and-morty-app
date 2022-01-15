<template>
  <div class="main">
    <div class="presentation">
      <div class="title_message"><h1>WELCOME TO RICK AND MORTY PAGE</h1></div>
      <!--<div>-->
      <div class="search_box">
        <input
          class="input_field"
          v-model="search"
          type="text"
          placeholder="Search for character"
        />
      </div>

      <div class="resumo">
        <div class="resumo_itens">
          <div class="resumo_content">
            <h3>EPISODIOS TOTAIS</h3>
            <span>{{ totalEps }}</span>
          </div>
        </div>
        <div class="resumo_itens">
          <div class="resumo_content">
            <h3>TOTAL PERSONAGENS</h3>
            <span>{{ totalChars }}</span>
          </div>
        </div>
        <div class="resumo_itens">
          <div class="resumo_content">
            <h3>TOTAL LOCALIZAÇÕES</h3>
            <span>{{ totalLocations }}</span>
          </div>
        </div>
      </div>
      <!--</div>-->
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
  </div>
</template>
<script src="./components/home.js">
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
.container {
  display: flex;
  justify-content: space-around;
  grid-gap: 10px;
}
.input_field {
  border-color: #cccccc;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border-width: 2px;
  border-radius: 45px;
  border-style: solid;
  width: 300px;
  height: 40px;
}
.main {
  padding-top: 80px;
}
.presentation {
  width: 100%;
  height: 400px;
  background-color: #1b2c43;
}
.title_message {
  font-family: 'Mochiy Pop One', sans-serif;
  margin: 0;
  padding-top: 10px;
  color: white;
}
.search_box {
  padding-top: 50px;
}
.resumo {
  color: white;
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
}
.resumo_itens {
  -webkit-text-size-adjust: 100%;
  font-family: Verdana, sans-serif;
  line-height: 1.5;
  text-align: center;
  box-sizing: inherit;
}
.resumo_content {
  -webkit-text-size-adjust: 100%;
  font-family: Verdana, sans-serif;
  line-height: 1.5;
  text-align: center !important;
  box-sizing: inherit;
}
</style>

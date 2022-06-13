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
          placeholder="Ex: Morty"
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
    </div>

    <br />
    <div class="row">
      <Informations
        class="col-12"
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
[class*='col-'] {
  float: left;
}
.col-1 {
  width: 8.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}
.row::after {
  content: '';
  clear: both;
  display: table;
  justify-content: center;
}
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

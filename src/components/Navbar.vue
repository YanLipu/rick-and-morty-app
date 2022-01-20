<template>
  <nav class="nav">
    <div hidden class="nav_item">
      <a class="nav_button" @click="$router.push({ name: 'locations' })"
        >LOCATIONS</a
      >
    </div>
    <div class="nav_item">
      <h3 class="title" @click="$router.push({ name: 'Home' })">
        RICK AND MORTY APP
      </h3>
    </div>
    <div class="nav_item">
      <a class="nav_button" @click="$router.push({ name: 'episodes' })"
        >EPISODES</a
      >
    </div>
  </nav>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
.nav {
  background-color: #ffffff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 25px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  left: 0px;
  top: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.nav_item {
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Mochiy Pop One', sans-serif;
}
.nav_button {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  display: inline-block;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  margin-left: 1rem !important;
  font-weight: 600;
  color: #17003d;
  border-color: #17003d;
  margin-right: 1rem !important;
}
.nav_button:hover {
  color: #2a2730;
  background-color: #ffe484;
  border-color: #ffe484;
}
.title:hover {
  cursor: pointer;
}
</style>
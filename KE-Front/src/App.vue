<template>
  <div id="app">
    <h2>Welcome to</h2>
    <h1>Keweenaw Exploration</h1>
    <img src="./assets/Keweenaw.jpg" alt="Picture of the Keweenaw"><br>
    <button id = "loc">Explore Locations</button>
  </div>
</template>

<!--
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
-->

<style>
@font-face {
  font-family: "Kalam";
  src: local("Kalam"),
  url(./assets/Kalam-Regular.ttf) format("truetype");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
#loc {
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #6A8D65;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 30px;
  border: none;
  padding: 5px 15px 5px 15px;
}
body {
  background: #6A8D65;
  margin: 0;
  padding: 0;
}
h2 {
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 0;
  margin-top: 5%;
}
h1 {
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  margin: 0;
  color: #FFFFFF;
}
img {
  width: 30%
}
</style>

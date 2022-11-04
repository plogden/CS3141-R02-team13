<template>
  <div id="app">
    <h2>Welcome to</h2>
    <h1>Keweenaw Exploration</h1>
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2014%2F07%2F20222311%2F102166846_w.jpg" alt="Picture of the Keweenaw"><br>
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

<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Kalam">

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
}
#loc {
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 77px;
  text-align: center;
  color: #6A8D65;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 30px;
  border: none;
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
  font-size: 48px;
  text-align: center;
  color: #FFFFFF;
}
h1 {
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  text-align: center;

  color: #FFFFFF;
}
img {
  width: 50%
}
</style>

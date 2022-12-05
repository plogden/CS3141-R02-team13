<template>
  <div id="app">
    <div style="padding-top: 2vh;">
      <div class="top">About</div>
    </div>
    <button id="home1" @click="$router.push(`/`)">Return Home</button>
    
  </div>
</template>

<script>
export default {
  name: 'LocationsList',

}
</script>

<style>
@font-face {
  font-family: "Kalam";
  src: local("Kalam"),
  url(@/assets/Kalam-Regular.ttf) format("truetype");
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
/* top bar with "locations" in it */
#top {
  display: flex;
  background-color: #FFF;
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  text-align: center;
  color: #6A8D65;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 30px;
  border: none;
  padding: 0px 400px 0px 400px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#home1{
  width: 150px;
  height: 40px;
  font-size: 24px;
  font-family: 'Kalam';
  font-style: normal;
  text-align: center;
  color: #6A8D65;
  box-sizing: content-box;
  background: rgb(255, 255, 255);
  border-radius: 30px;
  border: none;
  padding: 0px 0px 0px 0px;
  margin-top: 10px;
  margin-left: -84%;
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

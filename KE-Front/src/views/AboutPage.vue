<template>
  <div id="app">
    <div style="padding-top: 2vh;">
      <div class="top">About</div>
    </div>
    <button id="home1" @click="$router.push(`/`)">Return Home</button>
    <div id="spacing"></div>
    <table style="table-layout: fixed" width="70%">
      <tr>
        <td>
          <img src="@/assets/map2b.gif" alt="Map of the Keweenaw Peninsula">
        </td>
        <td>
          <p id="aboutdescription">This website has been created to inform visitors to the Keweenaw Penninsula of its many scenic and adventurous destinations, which may be difficult to get information about.<br><br>Our goal is to explain what activities are involved with each location, along with information about how to get there and what should be brought along.</p>
        </td>
      </tr>
    </table>
    <p id="names">Created by Hunter Malinowski, Andrew Koman, Patrick Ogden, Zora Jovicevic, and Ethan Jones for CS3141, Fall 2022</p>
  </div>
</template>

<script>


export default {
    name: "LocationsList",
    
}
</script>

<style scoped>
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
  margin-left: -820px;
}
#aboutdescription{
  width: 100%;
  display: inline-flex;
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  text-align: left;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  margin-left: 25px;
}
#names{
  width: 100%;
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
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
  display:block;
  margin-left: -25px;
  width: 100%;
}
#spacing{
  height: 3px;
}
</style>

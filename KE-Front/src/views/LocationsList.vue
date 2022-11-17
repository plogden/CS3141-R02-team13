<template>
  <div id="app">
    <div style="padding-top: 2vh;">
      <div class="top">Locations</div>
    </div>
    <input id="filter" type="text">
    <table>
      <tr>
        <td>
          <button id="location" @click="$router.push({ name: 'QuincyMine' })">
            <img id="image" src="@/assets/quincyMine.jpg" alt="Quincy Mine">
            <div class="name">Quincy Mine</div>
            <div class="info">More Info</div>
          </button>
        </td>
        <td>
          <button id="location" @click="$router.push({ name: 'HighRockBay' })">
            <img id="image" src="@/assets/highrockbay.jpg" alt="High Rock Bay">
            <div class="name">High Rock Bay</div>
            <div class="info">More Info</div>
          </button>
        </td>
        <td>
          <button id="location" @click="$router.push({ name: 'McLainStatePark' })">
            <img id="image" src="@/assets/mclainPark.jpg" alt="McLain State Park">
            <div class="name">McLain State Park</div>
            <div class="info">More Info</div>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button id="location" @click="$router.push({ name: 'HungarianFalls' })">
            <img id="image" src="@/assets/hungarianfalls.jpg" alt="Hungarian Falls">
            <div class="name">Hungarian Falls</div>
            <div class="info">More Info</div>
          </button>
        </td>
        <td>
          <button id="location" @click="$router.push({ name: 'QuincyDredge' })">
            <img id="image" src="@/assets/dredge.webp" alt="Quincy Dredge Number Two">
            <div class="name">Quincy Dredge Number Two</div>
            <div class="info">More Info</div>
          </button>
        </td>
        <td>
          <button id="location" @click="$router.push({ name: 'GayStampSands' })">
            <img id="image" src="@/assets/gaystampsands.jpg" alt="Gay Stamp Sands">
            <div class="name">Gay Stamp Sands</div>
            <div class="info">More Info</div>
          </button>
        </td>
      </tr>
    </table>
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
.top {
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

/* search bar */
#filter {
  width: 75%;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 30px;
  border: 3px solid #aaa;
  transition: border 0.2s ease-in-out;
  outline: none;
  box-sizing: border-box;
  background-color: white;
  background-image: url(@/assets/searchicon.png);
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}
#filter:focus {
  border: 3px solid #555;
}

/* more info info style */
.info{
  font-size: 20px;
  margin-top: -10px;
}

/* name styling for places */
.name{
  font-size: 24px;
  margin-top: -10px;
}

#image{
  border-radius: 30px;
  border: none;
  outline: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

#location{
  width: 400px;
  height: 260px;
  font-family: 'Kalam';
  font-style: normal;
  text-align: center;
  color: #FFF;
  box-sizing: content-box;
  background: #B1D2AC;
  border-radius: 30px;
  border: none;
  padding: 0px 0px 55px 0px;
}

td {
  padding: 5px;
}

</style>

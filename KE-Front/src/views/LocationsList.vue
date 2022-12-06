<template>
  <div id="app">
    <div style="padding-top: 2vh;">
      <div class="top">Locations</div>
    </div>
    <table>
      <tr>
        <td>
          <button id="home" @click="$router.push(`/`)">Return Home</button>
        </td>
        <td>
          <input class="filter" type="text">
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td>
          <button class="buttonfilter" id="all">All</button>
          <button class="buttonfilter" id="mines">Mines</button>
          <button class="buttonfilter" id="waterfalls">Waterfalls</button>
          <button class="buttonfilter" id="mountains">Mountains</button>
          <button class="buttonfilter" id="parks">Parks</button>
          <button class="buttonfilter" id="hikes">Hikes</button>
        </td>
      </tr>
    </table>
    <table>
      <tr v-for="locationCols of locationRows" :key="locationCols[0].id">
        <td v-for="location of locationCols" :key="location.id">
          <button id="location" @click="$router.push(`/location/${location.id}`)">
            <img id="image" :src="require(`@/assets/locations/${location.id}.jpg`)">
            <div class="name">{{location.name}}</div>
            <div class="info">More Info</div>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Client } from '@/network'

export default {
  name: 'LocationsList',
  data: () => ({
    locations: [],
    locationRows: [],
  }),
  async beforeMount() {
    try {
      var response = await Client.get('/locations')
      console.log(response)
      this.locations = response.data.locations
      // format locations into rows of 3
      let row = -1
      for (var i = 0; i < this.locations.length; i++) { 
        let location = this.locations[i]
        if(i%3==0){
          row++;
          this.locationRows[row] = []
        }
        this.locationRows[row].push(location)
      }

    } catch (error) {
      console.log(error)
      this.serverError = true
    }
  }

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

/* button to return home */
#home{
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
}

/* search bar */
.filter {
  width: 800px;
  padding: 12px 20px;
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
.filter:focus {
  border: 3px solid #555;
}

/* filter button styles */
.buttonfilter{
  width: 150px;
  height: 40px;
  font-size: 30px;
  font-family: 'Kalam';
  font-style: normal;
  text-align: center;
  color: #6A8D65;
  box-sizing: content-box;
  background: #FFF;
  border-radius: 30px;
  border: none;
  padding: 0px 0px 0px 0px;
  margin: -7px 5px 5px 5px;
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

#filter{
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

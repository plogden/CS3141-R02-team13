<template>
  <div id="app">
    <div style="padding-top: 2vh;">
      <div id="top">Locations</div>
    </div>
    <div id="title">
      <table>
        <tr>
          <td>
            <button id="back" @click="$router.push(`/locations`)">Back</button>
          </td>
          <td>
            {{location.name}}
          </td>
        </tr>
      </table>
    </div>
    <table>
      <tr>
        <td>
          <div id="type">Type: {{ location['Location_Type.category']}}</div>
        </td>
        <td>
          <div id="latitude">Latitude: {{ location.coordinates.coordinates[0]}}</div>
        </td>
      </tr>
      <tr>
        <td>
          <div id="vehicle">Vehicle: {{location.vehicle_required }}</div>
        </td>
        <td>
          <div id="longitude">Longitude: {{ location.coordinates.coordinates[1]}}</div>
        </td>
      </tr>
      <tr>
        <td>
          <img id="image" :src="require(`@/assets/locations/${location.id}.jpg`)" alt="Image of location">
        </td>
        <td>
          <iframe id="map" :src="`https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=${location.coordinates.coordinates[0]},${location.coordinates.coordinates[1]}+(${location.name})&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Client } from '@/network'

export default {
  name: 'LocationDetails',
  data: () => ({
    location: { name: 'Loading...', coordinates: {coordinates:[0,0]}, "Location_Type.category": "Loading", }
  }),
  async beforeMount() {
    try {
      const response = await Client.get(`/location?id=${this.$route.params.id}`);
      console.log(response)
      this.location = response.data.location

    } catch (error) {
      console.log(error)
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
#top {
  display: flex;
  font-family: 'Kalam',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  text-align: center;
  color: #6A8D65;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 30px;
  border: none;
  padding: 0 400px 0 400px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#title{
  display: flex;
  font-family: 'Kalam',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  margin-top: 10px;
  text-align: center;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#type{
  display: flex;
  font-family: 'Kalam',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: left;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  padding-right: 300px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#latitude{
  display: flex;
  font-family: 'Kalam',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: right;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  padding-left: 300px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#vehicle{
  display: flex;
  font-family: 'Kalam',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: left;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  padding-right: 300px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#longitude{
  display: flex;
  font-family: 'Kalam',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: right;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  padding-left: 300px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#description{
  display: flex;
  font-family: 'Kalam',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: left;
  color: #FFF;
  box-sizing: border-box;
  border: none;
  padding-right: 300px;
  padding-top: 50px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#map{
  padding-top: 50px;
  text-align: right;
}
#back{
  width: 150px;
  height: 40px;
  font-size: 24px;
  font-family: 'Kalam',serif;
  font-style: normal;
  text-align: center;
  color: #6A8D65;
  box-sizing: content-box;
  background: rgb(255, 255, 255);
  border-radius: 30px;
  border: none;
  padding: 0 0 0 0;
  margin-top: 10px;
  margin-left: -820px;
}
</style>

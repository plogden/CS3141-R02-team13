<template>
  <div id="app">
    <div style="padding-top: 2vh;">
      <div id="top">Locations</div>
    </div>
    <div id="title">McLain State Park</div>
    <table>
      <tr>
        <td>
          <div id="type">Type: Park</div>
        </td>
        <td>
          <div id="latitude">Latitude: 47.2333</div>
        </td>
      </tr>
      <tr>
        <td>
          <div id="vehicle">Vehicle: Any</div>
        </td>
        <td>
          <div id="longitude">Longitude: -88.6159</div>
        </td>
      </tr>
      <tr>
        <td>
          <div id="description">Visitors can enjoy a variety of activities in<br>the park: fishing, windsurfing, berry picking,<br>beachcombing, sight-seeing and hunting.<br>Beautiful ice formations along the shore<br>attract cross country skiers and<br>snowshoers to four miles of McLain<br>Hiking/skiing trails. Terrain varies from flat<br>open expanses to woods and hills.</div>
        </td>
        <td>
          <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.146323577399!2d-88.62040146653153!3d47.23328365504092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d50b3d705b25b39%3A0xa2d631e9c0ba9a06!2sMcLain%20State%20Park!5e0!3m2!1sen!2sus!4v1668659155869!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'QuincyMine',

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
#title{
  display: flex;
  font-family: 'Kalam';
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
  font-family: 'Kalam';
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
  font-family: 'Kalam';
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
  font-family: 'Kalam';
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
  font-family: 'Kalam';
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
  font-family: 'Kalam';
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
</style>

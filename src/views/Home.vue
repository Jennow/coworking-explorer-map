<template>
  <div class="home">
    <GMapMap
       :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
      :center="center"
      :zoom="3"
      map-type-id="terrain"
      style="width: 500px; height: 500px"
      :disableDefaultUI="true"
    >
    <GMapCluster
      enableRetinaIcons="true"
      imagePath="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/OOjs_UI_icon_info.svg/1200px-OOjs_UI_icon_info.svg.png"
      >
      <template v-for="(space) in spaces" :key="space">
        <GMapMarker
            :position="{lat: parseFloat(space.map.lat), lng: parseFloat(space.map.lng)}"
            :clickable="true"
            @click="center=space.map"
        >
          <!-- <GMapInfoWindow>
            <div>I am in info window
            </div>
        </GMapInfoWindow> -->
        </GMapMarker>

      </template>
    </GMapCluster>
    </GMapMap>
  </div>
</template>

<style>
.vue-map {
  height: 500px;
}
</style>

<script>
const axios = require('axios');

export default {
  name: 'Home',
  data() {
    return {
      center: { lng: 51.093048, lat: 6.842120 },
      spaces: [
        {
          map: {
          },
        },
      ],
    };
  },
  mounted() {
    axios.get('https://coworking-explorer.jencoding.com/spaces')
      .then((response) => {
        this.spaces = response.data;
      });
  },
};

</script>

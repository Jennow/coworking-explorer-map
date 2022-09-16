<template>
  <a v-if="mapMoved" @click="loadMarkers" class="floating-btn">Search here...</a>
  <LoadingScreen :isLoading="isLoading" />
  <div v-if="!isLoading" class="home">
    <GMapMap
        ref="GMapComponent"
       :options="{
        disableDefaultUi: false,
        mapId: '213208b604b031da',
        minZoom: 3,
        maxZoom: 16
      }"
      :center="{ lng: 10.000654, lat: 53.550341 }"
      :zoom="12"
      map-type-id="roadmap"
      style="width: 100vw; height: 100vh"
      :disableDefaultUI="true"
      :center_changed="true"
      @center_changed="changePosition"
      :zoom_changed="true"
      @zoom_changed="changePosition"
    >
    <GMapCluster
      :enableRetinaIcons="true"
      :minimumClusterSize="10"
      :zoomOnClick="true"
      :styles="clusterStyles"
      imagePath="https://coworking-explorer.jeniferprochnow.com/img/Cluster.95f03b58"
      >
      <template v-for="(space, index) in spaces" :key="space">
        <GMapMarker
            :icon="{
              url: require('./../assets/Marker.png'),
              scaledSize: {width: 30, height: 30},
              labelOrigin: {x: 15, y: -30}
            }"
            :position="{lat: parseFloat(space.lat), lng: parseFloat(space.lng)}"
            :clickable="true"
            :draggable="false"
            @click="openMarker(index)"
        >
        </GMapMarker>
        </template>
    </GMapCluster>
    </GMapMap>
    <transition name="">
       <div v-if="openedMarker.name" class="info-modal">
      <div v-if="openedMarker.name" class="info">
        <span class="x-icon" @click="openMarker(null)">
          <span class="material-icons">
            close
          </span>
        </span>
        <h2>{{ openedMarker.name }}</h2>
        <div class="flex">
          <div class="img">
            <img :src="openedMarker['smallCoverPhoto']" alt="">
          </div>
          <div class="address-info">
            <p v-if="openedMarker.city">{{ openedMarker.city }},
              {{ openedMarker.state }},
              {{ openedMarker.country }}
            </p>
            <a :href="'/detail/' + openedMarker.identifier" class="button cta">Details</a>
          </div>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<style scoped>

body {
  overflow-y: hidden;
}

.vue-map-container {
  height: 100vh;
  overflow-y: hidden;
}

@keyframes Up {
  to {
    bottom: 0px;
  }
}

.floating-btn {
  background-color: #fff;
  position: absolute;
  left: 50%;
    transform: translateX(-50%);
  top: 80px;
  max-width: 250px;
  z-index: 1;
  border: 2px solid #6051dc;
  border-radius: 50px;
  color: #6051dc;
  padding: 8px 20px;
  text-decoration: none;
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.floating-btn:hover {
  background-color: #6051dc;
  color: #fff;
}

.-enter-active, .-leave-active {
  transition: all 0.5s ease;
  bottom: 0px!important;
}
.-enter-from, .-leave-to {
  bottom: -66vh!important;
}

.info-modal {
  background: #f0f0f0;
  position: absolute;
  bottom: 0px;
  width: 100vw;
  max-height: 66vh;
  left: 50%;
  color: #000;
  transform: translateX(-50%);
  overflow-y: ;
  box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 0px inset,
              rgb(50 50 93 / 25%) 0px 50px 100px 0px,
              rgb(0 0 0 / 30%) 0px 30px 60px 0px
}

.info-modal::-webkit-bar {
  display: none;
  -ms-overflow-style: none;  /* IE and Edge */
  bar-width: none;  /* Firefox */
}

.info-modal .x-icon {
  float: right;
  position: absolute;
  right: 20px;
  font-size: 2rem;
}

.info-modal .x-icon span {
  border: none;
  cursor: pointer;
}

.info-modal .info {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.info-modal .info .img{
  flex: 1;
  margin-bottom: 20px;
}

.info-modal .info .address-info {
  padding-left: 20px;
  flex: 2;
}

.info-modal .info .address-info p {
  margin: 0 0 20px;
}

.info-modal .info .address-info a {
  margin: 0 auto!important;
}

</style>

<script>
// import { ref, watch } from 'vue';
import LoadingScreen from './LoadingScreen.vue';

const axios = require('axios');
const cluster = require('../assets/Cluster.png');

export default {
  name: 'Home',
  components: {
    LoadingScreen,
  },
  data() {
    return {
      map: null,
      mapMoved: false,
      clusterPath: cluster,
      isLoading: true,
      openedMarkerIndex: null,
      openedMarker: {
        name: '',
        slug: '',
        image: '',
      },
      center: { lng: 10.000654, lat: 53.550341 },
      zoom: 12,
      spaces: [
        {
          map: {
          },
        },
      ],
      clusterStyles: [
        {
          textColor: 'black',
          url: cluster,
          height: 32.2,
          width: 33,
        },
        {
          textColor: 'black',
          url: cluster,
          height: 46,
          width: 46,
        },
        {
          textColor: 'black',
          url: cluster,
          height: 64,
          width: 64,
        },
      ],
    };
  },
  methods: {
    openMarker(index) {
      this.openedMarkerIndex = index;
      this.openedMarker = {
        name: '',
        identifier: '',
        image: '',
      };
      if (this.spaces[index]) {
        this.openedMarker = this.spaces[index];
      }
    },
    async changePosition() {
      await this.setMap();
      this.mapMoved = true;
    },
    async setMap() {
      if (!this.map && this.$refs.GMapComponent) {
        this.$refs.GMapComponent.$mapPromise.then((map) => {
          this.map = map;
        });
      }
    },
    loadMarkers() {
      this.mapMoved = false;
      const component = this;
      let query = '';

      if (this.map) {
        const bounds = this.map.getBounds();
        const ne = bounds.getNorthEast().toJSON();
        const sw = bounds.getSouthWest().toJSON();
        const northBound = ne.lat;
        const eastBound = ne.lng;
        const southBound = sw.lat;
        const westBound = sw.lng;

        query = `?north=${northBound}&east=${eastBound}&south=${southBound}&west=${westBound}`;
      } else {
        query = `?zoom=${this.zoom}&lat=${parseFloat(this.center.lat)}&lng=${parseFloat(this.center.lng)}`;
      }

      axios.get(`https://coworking-explorer.jeniferprochnow.com/api/spaces${query}`)
        .then((response) => {
          this.spaces = response.data;
          console.log(this.spaces);
          setTimeout(() => {
            component.isLoading = false;
          }, 500);
        });
    },
  },
  mounted() {
    this.loadMarkers();
  },

};

</script>

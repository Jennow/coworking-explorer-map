<template>
  <LoadingScreen :isLoading="isLoading" />
  <div v-if="!isLoading" class="home">
    <GMapMap
       :options="{
        disableDefaultUi: false,
        mapId: '213208b604b031da',
      }"
      :center="center"
      :zoom="6"
      map-type-id="roadmap"
      style="width: 100vw; height: 100vh"
      :disableDefaultUI="true"
    >
    <GMapCluster
      :enableRetinaIcons="true"
      :minimumClusterSize="10"
      :zoomOnClick="true"
      :styles="clusterStyles"
      imagePath="https://coworking-explorer.jencoding.com/img/Cluster.95f03b58"
      >
      <template v-for="(space, index) in spaces" :key="space">
        <GMapMarker
            :icon="{
              url: require('./../assets/Marker.png'),
              scaledSize: {width: 30, height: 30},
              labelOrigin: {x: 15, y: -30}
            }"
            :position="{lat: parseFloat(space.map.lat), lng: parseFloat(space.map.lng)}"
            :clickable="true"
            :draggable="false"
            @click="openMarker(index)"
        >
        </GMapMarker>
        </template>
    </GMapCluster>
    </GMapMap>
    <div v-if="openedMarker.name" class="info-modal">
      <div v-if="openedMarker.name" class="info">
        <span class="x-icon" @click="openMarker(null)">
          <span class="material-icons">
            close
          </span>
        </span>
        <h2>{{ openedMarker.name }}</h2>
        <img :src="openedMarker['cover-photo']" alt="">
        <a :href="'/detail/' + openedMarker.slug" class="button cta">Details</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.vue-map-container {
  height: 100vh;
  overflow-y: hidden;
}

.info-modal {
  position: absolute;
  width: 100vw;
  max-height: 50vh;
  bottom: 0px;
  left: 50%;
  color: #000;
  transform: translateX(-50%);
}

.info-modal .x-icon {
  float: right;
  font-size: 2rem;
}

.info-modal .x-icon span {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.info-modal .info {
  background: #fff;
  padding: 20px;
}

.info-modal .info img {
  display: block;
  margin: auto;
  /* width: 100%; */
}

</style>

<script>
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
      clusterPath: cluster,
      isLoading: true,
      openedMarkerIndex: null,
      openedMarker: {
        name: '',
        slug: '',
        image: '',
      },
      center: { lng: 10.000654, lat: 53.550341 },
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
        slug: '',
        image: '',
      };
      if (this.spaces[index]) {
        this.openedMarker = this.spaces[index];
        console.log(this.openedMarker);
      }
    },
  },
  mounted() {
    const component = this;
    axios.get('https://coworking-explorer.jencoding.com/api/spaces')
      .then((response) => {
        this.spaces = response.data;
        setTimeout(() => {
          component.isLoading = false;
        }, 500);
      });
  },
};

</script>

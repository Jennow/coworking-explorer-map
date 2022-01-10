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
      enableRetinaIcons="true"
      :minimumClusterSize="14"
      :zoomOnClick="true"
      imagePath="https://jencoding.com/img/markers/cluster"
      >
      <template v-for="(space, index) in spaces" :key="space">
        <GMapMarker
            :icon="{
              url: 'https://jencoding.com/img/markers/marker1.png',
              scaledSize: {width: 40, height: 40},
              labelOrigin: {x: 20, y: -40}
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
    <div v-if="openedMarker.name" class="glass info-modal">
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

.home {
  padding: 20px;
}

.vue-map-container {
  height: calc(100vh - 40px);
}

.info-modal {
  position: absolute;
  width: 600px;
  max-width: calc(100% - 40px);
  bottom: 40px;
  left: 50%;
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
  background: #ffbb3b;
  background: linear-gradient(45deg,
          #ffbb3b 0%,
          #ff688f 50%,
          #7d457b 100%);
  padding: 20px;
}

.info-modal .info img {
  display: block;
  width: 100%;
}

</style>

<script>
import LoadingScreen from './LoadingScreen.vue';

const axios = require('axios');

export default {
  name: 'Home',
  components: {
    LoadingScreen,
  },
  data() {
    return {
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
    axios.get('https://coworking-explorer.jencoding.com/spaces')
      .then((response) => {
        this.spaces = response.data;
        this.isLoading = false;
      });
  },
};

</script>

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
    <transition name="scroll">
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
            <img :src="openedMarker['cover-photo']" alt="">
          </div>
          <div class="address-info">
            <p v-if="openedMarker.map.city">{{ openedMarker.map.city }},
              {{ openedMarker.map.state }},
              {{ openedMarker.map.country }}
            </p>
            <a :href="'/detail/' + openedMarker.slug" class="button cta">Details</a>
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

@keyframes scrollUp {
  to {
    bottom: 0px;
  }
}

.scroll-enter-active, .scroll-leave-active {
  transition: all 0.5s ease;
  bottom: 0px!important;
}
.scroll-enter-from, .scroll-leave-to {
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
  overflow-y: scroll;
  box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 0px inset,
              rgb(50 50 93 / 25%) 0px 50px 100px 0px,
              rgb(0 0 0 / 30%) 0px 30px 60px 0px
}

.info-modal::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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

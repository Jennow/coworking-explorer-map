<template>
  <LoadingScreen :isLoading="isLoading" />
  <div v-if="!isLoading" class='detail'>
    <div class="teaser" style="position: relative">
      <div class="coverphoto" :style="{ 'background-image': 'url(' + space.coverPhoto +  ')' }"/>
      <div class="glass-logo-wrapper">
        <div class="logo" :style="{'background-image': 'url(' + space.logo +  ')'}"/>
      </div>
    </div>

    <div class="space-info container">
        <h1>{{ space.name }}</h1>
      <div class="glass">
        {{ space.description }}
      </div>
        <h2>Address</h2>

      <div class="address glass">
        <span class="address-text">{{ space.map ? space.map.address : '' }}</span>
        <GMapMap
          :options="{
            mapId: '213208b604b031da',
            disableDefaultUi: false
          }"
          :center="{lat: parseFloat(space.map.lat), lng: parseFloat(space.map.lng)}"
          :zoom="10"
          map-type-id="roadmap"
          :disableDefaultUI="true"
    >
      <GMapMarker
          :position="{lat: parseFloat(space.map.lat), lng: parseFloat(space.map.lng)}"
          :clickable="false"
          :draggable="false"
          :icon="{
              url: 'https://jencoding.com/img/markers/marker1.png',
              scaledSize: {width: 40, height: 40},
              labelOrigin: {x: 20, y: -40}
          }"
      >
      </GMapMarker>
    </GMapMap>
      </div>
      <div v-if="space.prices.length">
        <h2>Prices</h2>
        <div class="glass">
          <div class="price-tile" v-for="price in space.prices" :key="price">
            <div>
              <h2>{{ price.priceTitle }}</h2>
              <span class="person-hint">{{ price.personHint }}</span>
            </div>
            <div>{{ price.legend }}</div>
            <div class="price-tag">{{ price.price }} per {{ price.frequency }}</div>
          </div>
        </div>
      </div>
    </div>
    <a :href="'https://' + space.website" class="button cta">visit website</a>

</div>
</template>

<style lang="postcss" scoped>
  .teaser {
    margin-bottom: 100px;
  }

  .space-info {
    text-align: left;
  }

  .coverphoto {
    height: 35vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 75px;
    box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }

  .glass-logo-wrapper {
    background-color: rgba(255, 255, 255, .2);
    backdrop-filter: blur(5px);
    height: 140px;
    width: 140px;
    bottom: -65px;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 50%;
    padding: 10px;
    margin: auto;
    box-sizing: border-box;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .logo {
    height: 120px;
    width: 120px;
    background-size: 80%;
    background-repeat: no-repeat;
    background-color: aliceblue;
    border-radius: 50%;
    background-position: center;
  }

  .address {
    margin-bottom: 20px;
  }

  .vue-map-container {
    height: 20vh;
  }

  .price-tile {
      border-bottom: 1px solid #fff;
      margin-bottom: 20px;
      padding-bottom: 20px;
  }

  .price-tile h2 {
    display: inline-block;
    margin-bottom: 20px;
  }

  .person-hint {
    font-style: italic;
    color: #7d457b;
    float: right;
    line-height: 2.4rem;
    padding: 0 10px;
  }

  .price-tag {
    background-color: #fff;
    color: #7d457b;
    border-radius: 50px;
    padding: 5px;
    font-weight: 900;
    width: 250px;
    text-align: center;
    margin: 20px 0 0 auto;
  }
</style>

<script>
import LoadingScreen from './LoadingScreen.vue';

const axios = require('axios');

export default {
  data() {
    return {
      isLoading: true,
      space: {
        map: {
          lat: 1,
          lng: 1,
        },
        prices: [],
      },
    };
  },
  components: {
    LoadingScreen,
  },
  mounted() {
    const identifier = this.$route.params.id;
    console.log(identifier);
    axios.get(`https://coworking-explorer.jencoding.com/spaces/${identifier}`)
      .then((response) => {
        this.space = response.data;
        this.isLoading = false;
      });
  },
};
</script>

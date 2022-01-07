<template>
  <div class='detail'>
    <div class="teaser" style="position: relative">
      <div class="coverphoto" :style="{ 'background-image': 'url(' + space.coverPhoto +  ')' }"/>
      <div class="logo" :style="{'background-image': 'url(' + space.logo +  ')'}"/>
    </div>
    <div class="space-info">
      <h1>{{ space.name }}</h1>
      <p>{{ space.description }}</p>
      <p class="address">{{ space.map ? space.map.address : '' }}</p>
    </div>
    <a :href="space.website" class="button cta">Visit website</a>
</div>
</template>

<style lang="postcss" scoped>
  .teaser {
    margin-bottom: 100px;
  }

  .space-info {
    text-align: left;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
  }

  p, a {
    font-size: 1.2rem;
  }

  .coverphoto {
    max-height: 300px;
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 75px;
  }

  .logo {
    height: 150px;
    width: 150px;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: -75px;
    margin: auto;
    left: 0;
    right: 0;
    border-radius: 50%;
    border: 8px solid #fff;
    background-position: center;
    -webkit-box-shadow: 0px 0px 10px 0px #333333;
    box-shadow: 0px 5px 10px 0px #666;
  }
</style>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      space: {},
    };
  },
  mounted() {
    axios.get('https://coworking-explorer.jencoding.com/spaces/sleevesup-hannover')
      .then((response) => {
        this.space = response.data;
        console.log(response);
      });
  },
};
</script>

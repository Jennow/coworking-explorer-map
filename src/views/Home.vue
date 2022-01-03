<template>
  <div class="home">
    <GMapMap
          :center="center"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 500px"
                :disableDefaultUI="true"

    >
      <GMapCluster>
        <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
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
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      center: { lat: 51.093048, lng: 6.842120 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.842120,
          },
        },
      ],
    };
  },
};
</script>

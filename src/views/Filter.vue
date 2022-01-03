<template>
  <div class="filter">
    <h1>Here the filters will be set</h1>
    <form>
        <input :location="location" type="text" placeholder="Standort">
        <input :radius="radius" type="text" placeholder="Radius">
    </form>
  </div>
</template>

<script>
export default {
  props: {
    location: String,
    radius: Number,
  },
};
</script>

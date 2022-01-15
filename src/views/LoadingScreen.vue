<template>
  <div :class="{ loader: true, fadeout: !isLoading, fadein: isLoading}">
    <img :src="require('./../assets/Logo2.svg')" alt="">
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: ['isLoading'],
};
</script>

<style scoped>

img {
  width: 250px;
  height: 250px;
  margin: auto;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  position: absolute;
}

.loader {
  bottom: 0;
  background: #fff;
  z-index: 2000;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 1s forwards;
}

.fadein {
  animation: fadein 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes fadein {
  to {
    opacity: 100;
    visibility: 100;
  }
}
</style>

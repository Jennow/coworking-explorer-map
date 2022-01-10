<template>
  <div id="nav">
    <router-link to="/">
      <span class="material-icons">home</span>
    </router-link>
  </div>
    <router-view/>
</template>

<style>

body {
  /* background: rgb(113,182,255);
  background: linear-gradient(189deg, rgba(113,182,255,1) 10%,
                                    rgba(217,169,255,1) 51%,
                                    rgba(158,255,234,1) 100%); */
background: #ffbb3b;
background: linear-gradient(45deg,
         #ffbb3b 0%,
         #ff688f 50%,
         #7d457b 100%);
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  min-height: 100vh;
}

#nav {
  padding: 15px;
  position: fixed;
  z-index: 1000;
  width: 100vw;
  left: 0;
  top: 0;
  text-align: left;
}

#nav a.router-link-exact-active {
  display: none;
}

.container {
  max-width: 900px;
  width: calc(100% - 40px);
  margin: auto;
}

h1, h2, h3, h4, h5 {
  font-weight: 300;
  font-family: 'DM Serif Display', serif;
  margin: 0 0 1rem 0;
}

h1 {
  font-size: 3rem;
  line-height: 3rem;
}

p {
  margin: 50px 0;
  font-size: 1.2rem;;
  line-height: 1.3rem;
}

.button {
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  padding: 8px 20px;
  text-decoration: none;
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.cta {
  display: inline-block;
  margin: 20px;
  padding: 8px 30px;
  font-size: 1.4rem;
}

.button:hover {
  background-color: #fff;
  color: #000;
  mix-blend-mode: lighten;
}

.material-icons {
  color: #fff;
  background-color: #7d457b;
  border: 1px solid #7d457b;
  border-radius: 50px;
  padding: 5px;
}

.glass {
  background-color: rgba(255, 255, 255, .20);
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>

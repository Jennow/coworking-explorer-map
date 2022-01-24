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
  background: #6051dc;
  background: linear-gradient(189deg, #6051dc 10%,
                                    rgb(243, 132, 184) 51%,
                                    rgb(81, 230, 197) 100%);
  background: #fff;
  /* background: linear-gradient(
189deg, #857ec6 10%, rgb(0 180 149) 100%); */
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  min-height: 100vh;
  margin: auto;
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
  word-break: break-word;
  overflow: visible;
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
  border: 2px solid #6051dc;
  border-radius: 50px;
  color: #6051dc;
  padding: 8px 20px;
  text-decoration: none;
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.cta {
  display: block;
  margin: 60px auto 40px;
  padding: 8px 30px;
  font-size: 1.4rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.button:hover {
  background-color: #6051dc;
  color: #fff;
  mix-blend-mode: darken;
}

.material-icons {
  color: #fff;
  background-color: #6051dc;
  border: 1px solid #6051dc;
  border-radius: 50px;
  padding: 5px;
}

.glass {
  background-color: rgba(255, 255, 255, .30);
  background-color: #f0f0f0;
  color: #000;
  box-sizing: border-box;
  /* box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.flex {
  display: flex;
}

@media screen and (max-width:589px) {
  .flex {
    flex-direction: column;
  }
}
</style>

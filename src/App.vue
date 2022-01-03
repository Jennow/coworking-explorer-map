<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/filter">Filter</router-link> |
    <router-link to="/detail">Detail View</router-link>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 900px;
  width: calc(100% - 40px);
  margin: auto;
}

.button {
  background-color: #42b983;
  border-radius: 3px;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
}

.cta {
  display: block;
  margin-top: 40px;
  margin-bottom: 80px;
}
</style>

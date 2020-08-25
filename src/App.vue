<template>
  <div id="app">
    <div id="nav">
      <!-- No navigation necessary <router-link to="/">Demo</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Lucida Console", Monaco, monospace;
  line-height: 2em;
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
</style>

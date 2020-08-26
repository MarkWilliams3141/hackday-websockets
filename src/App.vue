<template>
  <div id="app">
    <div id="title">
      <p>
        Hack Day August 2020: An Investigation into WebSockets using Amazon API
        Gateway
      </p>
    </div>
    <div id="nav">
      <router-link to="/">Demo</router-link> |
      <router-link to="/notes">Notes</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
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

#title {
  max-width: 960px;
  margin: auto;
  text-align: center;
}

.container {
  max-width: 960px;
  margin: auto;
  text-align: left;
}

.diagram {
  max-width: 420px;
}
</style>

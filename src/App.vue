<template>
  <div id="app">
    <router-view></router-view>
    <top></top>
  </div>
</template>

<script>
import Top from "./components/Top";

export default {
  name: "app",
  components: {
    Top
  }
};
</script>

<style>
@import "../node_modules/animate.css/animate.css";
@import "../node_modules/highlight.js/styles/dark.css";

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px 20px 50px;
}
h1,
h2 {
  font-weight: normal;
}
h3 {
  margin: 20px 0;
}
a {
  color: #42b983;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>

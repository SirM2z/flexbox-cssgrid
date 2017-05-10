<template>
  <div id="app">
    <flexbox></flexbox>
    <css-grid></css-grid>
  </div>
</template>

<script>
import Flexbox from './components/Flexbox'
import CssGrid from './components/CssGrid'

export default {
  name: 'app',
  components: {
    Flexbox,
    CssGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px 20px;
}
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
</style>

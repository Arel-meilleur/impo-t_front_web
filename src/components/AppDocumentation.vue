<template>
  <div id="app">
      <PdfViewer/>
  </div>
</template>

<script>
import PdfViewer from './pdf/PdfViewer.vue';
export default {
  name: "App",
  components: {
    PdfViewer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  padding: 50px;
}
</style>
<template>
  <Header/>
  <main class="bg-background min-h-screen">
    <Video/>
  </main>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer  from "./components/Footer.vue";
import Video   from "./components/Video.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Video
  }
}
</script>

<style>

</style>

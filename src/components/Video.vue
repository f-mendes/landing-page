<script>
import { defineComponent } from 'vue';

export default defineComponent({
   name: 'Video',
   data() {
     return {
        play:  null,
        mudo:  null,
        bar: 0,
     };
   },
   methods: {
     controls() {
        const video = document.querySelector('video')

        if (video.muted){
           video.muted = false
           this.mudo.style.display = 'none'
        }else {
          if (video.paused ){
            video.play()
            this.play.style.display = 'none'
          }else{
            video.pause()
            this.play.style.display = 'block'
          }
        }


     },
      progressBar() {
        const video = document.querySelector('video')
        const progressBar = document.getElementById('progress-bar')
        let progress = (video.currentTime / video.duration) * 100;
        this.bar = progress * 1.3

        this.bar = Math.min(this.bar, 90);

        if(this.bar <= 90 || progress >= 90){
            let tempo = progress > 90 ? progress : this.bar
            progressBar.style.width = tempo + "%"
        }
      }
   },
    mounted() {
      this.play = document.getElementById('play')
      this.mudo = document.getElementById('mudo')

      this.play.style.display = 'none'
    },
});

</script>

<template>
  <div class="flex justify-center items-center p-8">
    <div class="relative" @click="controls">
      <video class="lg:h-96" autoplay muted @timeupdate="progressBar">
        <source src="../assets/php.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div id="progress-bar" class="bg-red-700 p-1 absolute bottom-0 left-0"></div>
      <img id="play" src="../assets/play.png" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img id="mudo" src="../assets/mudo.png"      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    </div>

  </div>
</template>

<style scoped>

</style>
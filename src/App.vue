<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue"
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

export default {
  name: 'app'

}
</script>

<style lang="scss">
@import 'app.scss';
</style>
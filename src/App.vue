<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue"

export default {
  name: 'app'
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import 'bootstrap-sass/assets/stylesheets/bootstrap';
@import 'app.scss';
</style>

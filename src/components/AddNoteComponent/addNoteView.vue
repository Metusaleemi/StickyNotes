<template>
  <div id="addnote" class="mdc-card">
    <div class="col-xs-12"> 
      <form action="#" @submit.prevent="onSubmit" @click="isActive= true">
        <div class="mdc-text-field mdc-text-field hide title" v-bind:class="[ isActive ? activeClass : '' ]">
          <input type="text" id="noteTitle" class="no-border" name="noteTitle" placeholder="Nimi" v-model="noteTitle">
        </div>
        <div>
          <textarea type="text" 
                    class="no-border col-xs-12 no-gutter" 
                    placeholder="Tee muistiinpano..." 
                    id="noteBody" name="noteBody" 
                    rows="1" 
                    v-model="noteBody">
          </textarea>
        </div>
        <div class="col-xs-12 no-gutter hide" v-bind:class="[ isActive ? activeClass : '' ]">
          <button class="primary-button pull-right" @click="$emit('addNote')" :disabled="!isValid" data-mdc-auto-init="MDCRipple">Lisää</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import NoteStore from '../../store/NoteStore.js'

export default {
  name: 'add-note-component',

  data() {
    return {
      noteTitle: '',
      noteBody: '',
      activeClass: 'show',
      isActive: false
    }
  },

  methods: {
    onSubmit() {
      NoteStore.methods.addNote(this.$data)
    }
  },

  computed: {
    isValid: function() {
      return this.noteTitle != '' || this.noteBody != ''
    }
  },
  mounted: function(){
    var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
  }
}
</script>

<style lang="scss" scoped>
@import "add-note-view.scss";
</style>
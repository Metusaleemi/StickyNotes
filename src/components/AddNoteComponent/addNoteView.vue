<template>
  <div id="addnote" class="mdc-card col-xs-12">
    <div class="col-xs-12"> 
      <form action="#" @submit.prevent="onSubmit" @click="isActive= true">
        <div class=" mdc-text-field col-xs-12 no-gutter hide title" v-bind:class="[ isActive ? activeClass : '' ]">
          <textarea type="text" 
                class="no-border col-xs-12 no-gutter" 
                placeholder="Nimi" 
                id="noteTitle" name="note" 
                rows="1" 
                v-model="noteTitle">
          </textarea>
        </div>
        <div class="mdc-text-field col-xs-12 no-gutter body">
          <textarea type="text" 
                    class="no-border col-xs-12 no-gutter" 
                    placeholder="Tee muistiinpano..." 
                    id="noteBody" name="note" 
                    rows="1" 
                    v-model="noteBody"
                    v-bind:class="[ isSubmitted ? SubmitClass : '' ]"
                    @click="isSubmitted = false">
          </textarea>
        </div>
        <div class="col-xs-12 no-gutter hide" v-bind:class="[ isActive ? activeClass : '' ]">
          <button class="primary-button pull-right" @click="$emit('addNote'); isSubmitted = true" :disabled="!isValid" data-mdc-auto-init="MDCRipple">Lisää</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NoteStore from "../../store/NoteStore.js";

export default {
  name: "add-note-component",

  data() {
    return {
      noteTitle: "",
      noteBody: "",
      activeClass: "show",
      isActive: false,
      isSubmitted: false,
      SubmitClass: "reset"
    };
  },

  methods: {
    onSubmit() {
      console.log(this.$data)
      NoteStore.methods.addNote(this.$data);
      (this.noteTitle = ""), (this.noteBody = ""), (this.isActive = false);
    }
  },

  computed: {
    isValid: function() {
      return this.noteTitle != "" || this.noteBody != "";
    }
  },

  mounted: function() {
    var textareas = document.getElementsByName("note");

    for (var i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener("click", autosize);
      textareas[i].addEventListener("keydown", autosize);
    }

    function autosize() {
      var el = this;
      setTimeout(function() {
        el.style.cssText = "height:auto; padding:0";
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = "height:" + el.scrollHeight + "px";
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "add-note-view.scss";
</style>
<template>
   <div> 
    <div class="mdc-text-field col-xs-12 no-gutter hide title" v-bind:class="[ isActive ? activeClass : '' ]">
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
     
  </div>
</template>

<script>
import AddNoteComponent from "../AddNoteComponent/AddNoteView.vue";
import NoteStore from "../../store/NoteStore.js";

export default {
  name: "form-component",
  components: { AddNoteComponent },
  props: ['isActive'],

  data() {
    return {
      noteTitle: "",
      noteBody: "",
      activeClass: "show",
      isSubmitted: false,
      SubmitClass: "reset",
    };
  },
  computed: {
    isValid: function() {
      return this.noteTitle != "" || this.noteBody != "";
    }
     
  },


  mounted: function() {
    // FIX THE FUCTIONALITY TO DISPLAY ALL TEXT ATT ONCE
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
@import "../../app.scss";
</style>
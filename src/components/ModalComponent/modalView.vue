<template>
    <div class="modal-mask">
      <div class="modal-wrapper container">
        <div class="modal-container col-xs-12 col-md-6 col-md-offset-2 mdc-card">
          <button @click="$emit('close');"
              class="pull-right close-btn" 
              data-mdc-auto-init="MDCRipple">
          <i class="material-icons">clear</i>
          </button>
          <!-- TODO MAKE COMPONENT -->
          <div class="mdc-text-field col-xs-12 title no-gutter">
            <textarea-autosize type="text" 
                  class="no-border col-xs-12 " 
                  placeholder="Nimi" 
                  id="noteTitle" name="note" 
                  rows="1" 
                  v-model="noteTitle">
            </textarea-autosize>
          </div>
          <div class="mdc-text-field col-xs-12 body no-gutter">
            <textarea-autosize type="text" 
                      class="no-border col-xs-12" 
                      placeholder="Tee muistiinpano..." 
                      id="noteBody" name="note" 
                      rows="1" 
                      v-model="noteBody">
            </textarea-autosize>
          </div>
          <!-- TODO MAKE COMPONENT ENDS-->
         <!--  <note-form-component></note-form-component> -->

          <div class="col-xs-12">
          <button class="primary-button pull-right" @click="$emit('close'); updateNote(note.id)" :disabled="!isValid" data-mdc-auto-init="MDCRipple">Lisää</button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import AddNoteComponent from "../AddNoteComponent/AddNoteView.vue";
import NoteStore from "../../store/NoteStore.js";


export default {
  name: "modal-component",
  components: { AddNoteComponent },
  props: ["note"],

  data() {
    return {
      noteTitle: this.note.title,
      noteBody: this.note.body
    };
  },

  methods: {
    updateNote(id) {
      NoteStore.methods.updateNote(id, this.$data);
    }
  },

  computed: {
    isValid: function() {
      return this.noteTitle != "" || this.noteBody != "";
    }
  },

/*   mounted: function() {
    // FIX THE FUCTIONALITY TO DISPLAY ALL TEXT ATT ONCE
    var textareas = document.getElementsByName("note");
    console.log(textareas)
   


    for (var i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener("click", autosize);
      textareas[i].addEventListener("keydown", autosize);
    }

    function autosize() {
      var el = this;
      setTimeout(function() {
      el.style.cssText = "height:" + el.scrollHeight + "px";
      }, 0);
    }
  } */
};
</script>
<style lang="scss" scoped>
@import "modal-view.scss";
</style>
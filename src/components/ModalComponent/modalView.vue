<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container col-xs-12 no-gutter mdc-card">
          <div>
            <button  @click="$emit('close');"
                class="pull-right close-btn" 
                data-mdc-auto-init="MDCRipple">
            <i class="material-icons">clear</i>
          </button>
          </div>
          <div class="mdc-text-field mdc-text-field col-xs-12">
            <input type="text" id="noteTitle" class="no-border" name="noteTitle" placeholder="Nimi" v-model="noteTitle">
          </div>
          <div class="col-xs-12">
            <textarea type="text" 
                      class="no-border col-xs-12 no-gutter" 
                      placeholder="Tee muistiinpano..." 
                      id="noteBody" name="noteBody" 
                      rows="1" 
                      v-model="noteBody">
            </textarea>
          </div>
          <div class="">
            <button class="done-btn pull-right" @click="$emit('close'); updateNote(note.id)" :disabled="!isValid">
              <i class="material-icons">done</i>
            </button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import NoteStore from "../../store/NoteStore.js";
export default {
  name: "modal-component",
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
  }
};
</script>
<style lang="scss" scoped>
@import "modal-view.scss";
</style>
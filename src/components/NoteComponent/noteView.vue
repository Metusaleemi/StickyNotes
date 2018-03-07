<template>
  <div id="note" class="mdc-card card-content col-xs-12">
    <div>
      <button @click="removeNote(note.id)"
              class="pull-right close-btn" 
              data-mdc-auto-init="MDCRipple">
        <i class="material-icons">clear</i>
      </button>
      
      <div @click="showModal = true;" class="note-content no-border col-xs-12 no-gutter">
        <div contentEditable=false class="title" v-if="note.title != '' " v-html="note.title"> </div>
        <div contentEditable=false class="body" v-for="line in note.body.split('\n')" :key="line.id"> {{ line }} </div>
      </div> 
      <modal-component v-if="showModal" @close="showModal = false" :note="note"></modal-component>
    </div>
  </div>
</template>

<script>
import ModalComponent from '../ModalComponent/ModalView.vue'
import NoteStore from '../../store/NoteStore.js'

export default {
  components: { ModalComponent },
  name: 'note-component',
  props: ['note'],

  data() {
    return {
      showModal: false,
    }
  },

  methods: {
    removeNote(id) {
      NoteStore.methods.removeNote(id)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "note-view.scss";
</style>
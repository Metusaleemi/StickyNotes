<template>
<div class="col-xs-12 col-md-6 col-md-offset-2">
  <add-note-component></add-note-component>
  <note-component v-for="note in NoteStore.notes" :key="note.id" :note="note"></note-component>
</div>   
</template>

<script>
import AddNoteComponent from '../AddNoteComponent/AddNoteView.vue'
import NoteComponent from '../NoteComponent/NoteView.vue'
import NoteStore from '../../store/NoteStore.js'

export default {
  name: 'board-component',
  components: { AddNoteComponent, NoteComponent},

  data() {
    return {
      NoteStore: NoteStore.data
    }
  },

  created() {
    NoteStore.methods.getAllNotes()
  }
}
</script>

<style lang="scss" scoped>

</style>
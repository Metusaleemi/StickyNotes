import axios from 'axios'

const NoteStore = {
  data: {
    notes: [],
    errors: {}
  },

  methods: {
    getAllNotes () {
      axios.get('http://localhost:3000/notes')
        .then(response => {
          NoteStore.data.notes = response.data
        })
        .catch(e => {
          this.errors = e.response.data
        })
    },

    addNote (note) {
      axios.post('http://localhost:3000/notes', {
        title: note.noteTitle,
        body: note.noteBody
      })
        .then(response => {
          console.log(response)
          NoteStore.methods.getAllNotes()
        })
        .catch(e => {
          this.errors = e.response.data
        })
    },

    removeNote (id) {
      axios.delete('http://localhost:3000/notes/' + id)
        .then(response => {
          NoteStore.methods.getAllNotes()
        })
        .catch(e => {
          this.errors = e.response.data
        })
    },

    getNote (id) {
      axios.get('http://localhost:3000/notes/' + id)
        .then(response => {
          NoteStore.data.notes = response.data
        })
        .catch(e => {
          this.errors = e.response.data
        })
    },

    updateNote (id, data) {
      axios.put('http://localhost:3000/notes/' + id, {
        title: data.noteTitle,
        body: data.noteBody
      })
        .then(response => { NoteStore.methods.getAllNotes() })
        .catch(e => {
          this.errors = e.response.data
        })
    }
  }
}

export default NoteStore

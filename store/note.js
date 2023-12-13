import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const toast = useToast()
function SaveNoteToLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}
export const useNoteStore = defineStore('note', {
    state: () => {
        return {
            notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
        }
    },
    getters:{
        allnotes(state){
            return state.notes
        }
    },
actions: {
        addtonotes(newnotes) {
            this.notes.push(newnotes)
            SaveNoteToLocalStorage(this.notes)
            toast.success("Add New Note")
        }
    }


})
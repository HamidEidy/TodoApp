import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const toast = useToast();

function AlltodosInLocalStorega(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}
function Trashtodos(trash) {
    localStorage.setItem('trash', JSON.stringify(trash))
}
function AllNotesInLocalStorega(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}
function Completed(donetodos){
    localStorage.setItem('donetodos', JSON.stringify(donetodos))
}

export const useTaskStore = defineStore('task', {
    state: () => {
        return {
            todos:localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
            trash:localStorage.getItem('trash') ? JSON.parse(localStorage.getItem('trash')) : [],
            notes:localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
        }
    },
    getters: {
        donetodos(state) {
            return this.todos.filter((todos) => todos.done === true)

        },
        InHold(state) {
            return this.todos.filter((todos) => todos.done === false)
        },
    },
    actions: {
        addtodo(todofield) {
            this.todos.push({
                ...todofield
            })
           AlltodosInLocalStorega(this.todos)
            toast.success("Add New Todo");
        },
        movetodones(index) {
            this.donetodos[index].done = false;
            AlltodosInLocalStorega(this.todos)
        },
        movetotrash(index) {
            const pushitem = this.donetodos[index]
            console.log(index);
             this.todos = this.todos.filter((todos) => todos !== pushitem)
            this.trash.push({
                ...pushitem
             } );
           Trashtodos(this.trash)
         AlltodosInLocalStorega(this.todos)
  
            
        },
        clearTrash(){
            this.trash = []
            Trashtodos(this.trash)
        },

        addnote(newnotes) {
            this.notes.push({
                ...newnotes
            })
           AllNotesInLocalStorega(this.notes)
            toast.success("Add New Note")
        },
        deletenote(index) {
            this.trash.push(this.notes[index])
            this.notes.splice(index, 1)
          AllNotesInLocalStorega(this.notes)
            toast.warning("Deleted")
        }
    }
})

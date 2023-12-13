import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const toast = useToast();
function AlltodosInLocalStorega(progress) {
    localStorage.setItem('progress', JSON.stringify(progress))
}
function doneTodosInLocalStorega(completed) {
    localStorage.setItem('completed', JSON.stringify(completed))
}
export const useTaskStore = defineStore('task', {
    state: () => {
        return {
            progress: localStorage.getItem('progress') ? JSON.parse(localStorage.getItem('progress')) : [],
            completed: localStorage.getItem('completed') ? JSON.parse(localStorage.getItem('completed')) : []
        }
    },
    getters: {
        alltasks(state) {
            return state.progress
        },
        completeds(state) {
            return state.completed
        }
    },
    actions: {
        addtodo(todofield) {
            this.progress.push({
                ...todofield
            })
            AlltodosInLocalStorega(this.progress)
            toast.success("Add New Todo");
        },
        movetodones(index) {
            this.progress[index].done = true
            this.completed.push(this.progress[index])
            this.progress.splice(index, 1)
            toast.success("DONE")
            AlltodosInLocalStorega(this.progress)
            doneTodosInLocalStorega(this.completed)

        }
    }
})
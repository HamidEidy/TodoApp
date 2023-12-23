import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const toast = useToast()
export function SavetrashToLocalStorage(trash) {
    localStorage.setItem('trash', JSON.stringify(trash))
 }
export const useTrashStore = defineStore('trash', {
state: () => {
    return{
        trash: [],
    }
},
})